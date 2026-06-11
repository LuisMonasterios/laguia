/** OAuth GitHub — callback para Decap CMS */

function getRequestOrigin(req) {
	const proto = req.headers['x-forwarded-proto'] || 'https';
	const host = req.headers['x-forwarded-host'] || req.headers.host;
	return `${proto}://${host}`.replace(/\/$/, '');
}

function loginScript(token, parentOrigin) {
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
	var parentOrigin = ${JSON.stringify(parentOrigin)};
	var payload = JSON.stringify({ token: token, provider: 'github' });
	var msg = 'authorization:github:success:' + payload;
	var sent = false;

	function sendToken(origin) {
		if (sent || !window.opener) return;
		sent = true;
		var targets = [origin, parentOrigin, window.location.origin, '*'].filter(Boolean);
		var seen = {};
		targets.forEach(function (target) {
			if (seen[target]) return;
			seen[target] = true;
			try {
				window.opener.postMessage(msg, target);
			} catch (err) {}
		});
		document.getElementById('status').textContent = 'Sesión iniciada. Cerrando…';
		setTimeout(function () {
			window.close();
		}, 800);
	}

	if (!window.opener) {
		document.getElementById('status').textContent =
			'No se pudo conectar con el panel CMS. Cierra esta ventana e inténtalo de nuevo.';
		return;
	}

	// Protocolo Decap/Sveltia: el panel responde con "authorizing:github"
	window.addEventListener(
		'message',
		function (e) {
			if (e.data === 'authorizing:github') {
				sendToken(e.origin);
			}
		},
		false
	);

	// Decap CMS: avisar al panel que el popup está listo
	window.opener.postMessage('authorizing:github', '*');
})();
	</script>
</body>
</html>`;
}

export default async function handler(req, res) {
	const code = req.query?.code;
	const clientId = process.env.GITHUB_CLIENT_ID || process.env.OAUTH_GITHUB_CLIENT_ID;
	const clientSecret = process.env.GITHUB_CLIENT_SECRET || process.env.OAUTH_GITHUB_CLIENT_SECRET;
	const parentOrigin = getRequestOrigin(req);
	const redirectUri = `${parentOrigin}/api/callback`;

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

		const html = loginScript(data.access_token, parentOrigin);

		res.setHeader('Content-Type', 'text/html; charset=utf-8');
		res.status(200).send(html);
	} catch {
		res.status(500).send('Error interno en el callback OAuth.');
	}
}
