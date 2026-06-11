/** OAuth GitHub — callback para Decap CMS */

function getCanonicalOrigin() {
	return (process.env.SITE_URL || 'https://www.laguia.tech').replace(/\/$/, '');
}

function loginScript(token) {
	const canonicalOrigin = getCanonicalOrigin();
	return `<!doctype html>
<html lang="es">
<head>
	<meta charset="utf-8" />
	<title>Autenticando…</title>
</head>
<body>
	<p id="status">Completando inicio de sesión…</p>
	<script>
(function () {
	var token = ${JSON.stringify(token)};
	var msg =
		'authorization:github:success:' +
		JSON.stringify({ token: token, provider: 'github' });
	var targets = ${JSON.stringify([canonicalOrigin, 'https://laguia.tech', 'https://www.laguia.tech', '*'])};

	function deliver() {
		if (!window.opener) {
			document.getElementById('status').textContent =
				'No se pudo conectar con el panel. Cierra esta ventana e inténtalo desde https://www.laguia.tech/admin/';
			return;
		}
		targets.forEach(function (target) {
			try {
				window.opener.postMessage(msg, target);
			} catch (err) {}
		});
		document.getElementById('status').textContent = 'Sesión iniciada. Cerrando…';
	}

	if (!window.opener) {
		document.getElementById('status').textContent =
			'No se pudo conectar con el panel. Cierra esta ventana e inténtalo desde https://www.laguia.tech/admin/';
		return;
	}

	// Decap CMS: avisar al panel y responder al handshake
	window.addEventListener(
		'message',
		function (e) {
			if (e.data === 'authorizing:github') {
				deliver();
			}
		},
		false
	);

	try {
		window.opener.postMessage('authorizing:github', '*');
	} catch (err) {}

	setTimeout(deliver, 400);
})();
	</script>
</body>
</html>`;
}

export default async function handler(req, res) {
	const code = req.query?.code;
	const clientId = process.env.GITHUB_CLIENT_ID || process.env.OAUTH_GITHUB_CLIENT_ID;
	const clientSecret = process.env.GITHUB_CLIENT_SECRET || process.env.OAUTH_GITHUB_CLIENT_SECRET;
	const redirectUri = `${getCanonicalOrigin()}/api/callback`;

	if (!code) {
		res.status(400).send('Falta el código de autorización de GitHub.');
		return;
	}

	if (!clientId || !clientSecret) {
		res.status(500).send('Faltan GITHUB_CLIENT_ID o GITHUB_CLIENT_SECRET en Vercel.');
		return;
	}

	try {
		const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify({
				client_id: clientId,
				client_secret: clientSecret,
				code,
				redirect_uri: redirectUri,
			}),
		});

		const data = await tokenResponse.json();

		if (data.error) {
			res
				.status(401)
				.send(`Error GitHub: ${data.error_description || data.error}. Redirect URI: ${redirectUri}`);
			return;
		}

		if (!data.access_token) {
			res.status(401).send('GitHub no devolvió un token de acceso.');
			return;
		}

		res.setHeader('Content-Type', 'text/html; charset=utf-8');
		res.status(200).send(loginScript(data.access_token));
	} catch {
		res.status(500).send('Error interno en el callback OAuth.');
	}
}
