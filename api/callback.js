/** OAuth GitHub — callback para Decap CMS */

const DEFAULT_ORIGINS = ['www.laguia.tech', 'laguia.tech', 'localhost:4321', 'localhost:3000'];

function getAllowedOrigins() {
	const raw = process.env.ALLOWED_ORIGINS || DEFAULT_ORIGINS.join(',');
	return raw.split(',').map((o) => o.trim()).filter(Boolean);
}

function originAllowed(origin, allowed) {
	if (!origin) return false;
	const host = origin.replace(/^https?:\/\//, '');
	return allowed.some((entry) => {
		if (entry.includes('*')) {
			const regex = new RegExp(`^${entry.replace(/\./g, '\\.').replace(/\*/g, '[\\w-]+')}$`);
			return regex.test(host);
		}
		return entry === host;
	});
}

function loginScript(provider, message, content, allowedOrigins) {
	const payload = JSON.stringify(content);
	return `<!doctype html><html><head><meta charset="utf-8"><title>Autenticando…</title></head><body>
<script>
(function() {
  var allowed = ${JSON.stringify(allowedOrigins)};
  var payload = ${JSON.stringify(payload)};
  function isAllowed(origin) {
    if (!origin) return false;
    var host = origin.replace(/^https?:\\/\\//, '');
    return allowed.some(function(entry) {
      if (entry.indexOf('*') >= 0) {
        var re = new RegExp('^' + entry.replace(/\\./g, '\\\\.').replace(/\\*/g, '[\\\\w-]+') + '$');
        return re.test(host);
      }
      return entry === host;
    });
  }
  function receiveMessage(e) {
    if (!isAllowed(e.origin)) return;
    window.opener.postMessage(
      'authorization:${provider}:${message}:' + payload,
      e.origin
    );
  }
  window.addEventListener('message', receiveMessage, false);
  window.opener.postMessage('authorizing:${provider}', '*');
})();
</script></body></html>`;
}

export default async function handler(req, res) {
	const code = req.query?.code;
	const clientId = process.env.GITHUB_CLIENT_ID || process.env.OAUTH_GITHUB_CLIENT_ID;
	const clientSecret = process.env.GITHUB_CLIENT_SECRET || process.env.OAUTH_GITHUB_CLIENT_SECRET;
	const allowedOrigins = getAllowedOrigins();

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
			}),
		});

		const data = await tokenResponse.json();

		if (data.error) {
			res.status(401).send(data.error_description || 'Error al obtener el token de GitHub.');
			return;
		}

		const content = { token: data.access_token, provider: 'github' };
		const html = loginScript('github', 'success', content, allowedOrigins);

		res.setHeader('Content-Type', 'text/html; charset=utf-8');
		res.status(200).send(html);
	} catch (err) {
		res.status(500).send('Error interno en el callback OAuth.');
	}
}
