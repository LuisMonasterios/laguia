/** OAuth GitHub — inicio del flujo para Decap CMS */

function getRequestOrigin(req) {
	const proto = req.headers['x-forwarded-proto'] || 'https';
	const host = req.headers['x-forwarded-host'] || req.headers.host;
	return `${proto}://${host}`.replace(/\/$/, '');
}

export default function handler(req, res) {
	const clientId = process.env.GITHUB_CLIENT_ID || process.env.OAUTH_GITHUB_CLIENT_ID;

	if (!clientId) {
		res.status(500).send('Falta GITHUB_CLIENT_ID en las variables de entorno de Vercel.');
		return;
	}

	const redirectUri = `${getRequestOrigin(req)}/api/callback`;
	const params = new URLSearchParams({
		client_id: clientId,
		redirect_uri: redirectUri,
		scope: 'repo,user',
	});

	res.writeHead(302, { Location: `https://github.com/login/oauth/authorize?${params}` });
	res.end();
}
