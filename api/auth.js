/** OAuth GitHub — inicio del flujo para Decap CMS */
export default function handler(req, res) {
	const clientId = process.env.GITHUB_CLIENT_ID || process.env.OAUTH_GITHUB_CLIENT_ID;
	const siteUrl = (process.env.SITE_URL || 'https://www.laguia.tech').replace(/\/$/, '');

	if (!clientId) {
		res.status(500).send('Falta GITHUB_CLIENT_ID en las variables de entorno de Vercel.');
		return;
	}

	const redirectUri = `${siteUrl}/api/callback`;
	const params = new URLSearchParams({
		client_id: clientId,
		redirect_uri: redirectUri,
		scope: 'repo,user',
	});

	res.writeHead(302, { Location: `https://github.com/login/oauth/authorize?${params}` });
	res.end();
}
