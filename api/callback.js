/** OAuth GitHub — callback para Decap CMS */

function getRequestOrigin(req) {
	const proto = req.headers['x-forwarded-proto'] || 'https';
	const host = req.headers['x-forwarded-host'] || req.headers.host;
	return `${proto}://${host}`.replace(/\/$/, '');
}

function getAllowedOrigins(req) {
	const defaults = ['www.laguia.tech', 'laguia.tech', 'localhost:4321', 'localhost:3000'];
	const raw = process.env.ALLOWED_ORIGINS || defaults.join(',');
	const fromEnv = raw.split(',').map((o) => o.trim()).filter(Boolean);
	const host = (req.headers['x-forwarded-host'] || req.headers.host || '').split(':')[0];
	return host && !fromEnv.includes(host) ? [...fromEnv, host] : fromEnv;
}

function loginScript(content, allowedOrigins) {
	const contentJson = JSON.stringify(content);
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
	var content = ${contentJson};
	var allowed = ${JSON.stringify(allowedOrigins)};
	var sent = false;

	function hostFromOrigin(origin) {
		if (!origin) return '';
		return origin.replace(/^https?:\\/\\//, '').split('/')[0];
	}

	function isAllowed(origin) {
		var host = hostFromOrigin(origin);
		if (!host) return false;
		return allowed.some(function (entry) {
			if (entry.indexOf('*') >= 0) {
				var re = new RegExp('^' + entry.replace(/\\./g, '\\\\.').replace(/\\*/g, '[\\\\w-]+') + '$');
				return re.test(host);
			}
			return entry === host;
		});
	}

	function sendToken(targetOrigin) {
		if (sent || !window.opener) return;
		sent = true;
		var message =
			'authorization:github:success:' + JSON.stringify(content);
		window.opener.postMessage(message, targetOrigin || '*');
		document.getElementById('status').textContent = 'Sesión iniciada. Cerrando…';
		setTimeout(function () {
			window.close();
		}, 400);
	}

	function receiveMessage(e) {
		if (!isAllowed(e.origin)) return;
		sendToken(e.origin);
	}

	if (!window.opener) {
		document.getElementById('status').textContent =
			'No se pudo conectar con el panel CMS. Cierra esta ventana e inténtalo de nuevo.';
		return;
	}

	window.addEventListener('message', receiveMessage, false);
	window.opener.postMessage('authorizing:github', '*');

	// Fallback: algunos navegadores no completan el handshake a tiempo
	setTimeout(function () {
		sendToken('*');
	}, 1200);
})();
	</script>
</body>
</html>`;
}

export default async function handler(req, res) {
	const code = req.query?.code;
	const clientId = process.env.GITHUB_CLIENT_ID || process.env.OAUTH_GITHUB_CLIENT_ID;
	const clientSecret = process.env.GITHUB_CLIENT_SECRET || process.env.OAUTH_GITHUB_CLIENT_SECRET;
	const siteOrigin = getRequestOrigin(req);
	const redirectUri = `${siteOrigin}/api/callback`;
	const allowedOrigins = getAllowedOrigins(req);

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
				redirect_uri: redirectUri,
				client_secret: clientSecret,
				code,
			}),
		});

		const data = await tokenResponse.json();

		if (data.error) {
			res
				.status(401)
				.send(`Error GitHub: ${data.error_description || data.error}. Redirect URI usada: ${redirectUri}`);
			return;
		}

		const content = { token: data.access_token, provider: 'github' };
		const html = loginScript(content, allowedOrigins);

		res.setHeader('Content-Type', 'text/html; charset=utf-8');
		res.status(200).send(html);
	} catch {
		res.status(500).send('Error interno en el callback OAuth.');
	}
}
