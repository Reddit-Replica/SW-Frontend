const fs = require('fs');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');
const server = jsonServer.create();
// const router = jsonServer.router('./src/mock_server/users.json');
const userdb = JSON.parse(
	fs.readFileSync('./src/mock_server/users.json', 'UTF-8')
);
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(jsonServer.defaults());

const SECRET_KEY = '123456789';
const expiresIn = '1h';

// Create a token from a payload
function createToken(payload) {
	return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

// Verify the token
// function verifyToken(token) {
// 	return jwt.verify(token, SECRET_KEY, (err, decode) =>
// 		decode !== undefined ? decode : err
// 	);
// }

// Check if the user exists in database
function isAuthenticated({ name, email }) {
	return (
		userdb.users.findIndex(
			(user) => user.email === email && user.name === name
		) !== -1
	);
}

server.post('/api/auth/forget', (req, res) => {
	const { name, email } = req.body;
	if (isAuthenticated({ name, email }) === false) {
		const status = 401;
		const message = 'Incorrect name or email';
		res.status(status).json({ status, message });
		return;
	}
	const access_token = createToken({ name, email });
	res.status(200).json({ access_token });
});

// server.use(/^(?!\/auth).*$/, (req, res, next) => {
// 	if (
// 		req.headers.authorization === undefined ||
// 		req.headers.authorization.split(' ')[0] !== 'Bearer'
// 	) {
// 		const status = 401;
// 		const message = 'Bad authorization header';
// 		res.status(status).json({ status, message });
// 		return;
// 	}
// 	try {
// 		verifyToken(req.headers.authorization.split(' ')[1]);
// 		next();
// 	} catch (err) {
// 		const status = 401;
// 		const message = 'Error: access_token is not valid';
// 		res.status(status).json({ status, message });
// 	}
// });

// server.use(router);

server.listen(3000, () => {
	console.log('Run Auth API Server');
});
