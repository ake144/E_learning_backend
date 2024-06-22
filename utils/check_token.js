const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('./custom_error');

async function checkToken(req, res, next) {
    let token;

    // Check Authorization header for token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies && req.cookies.token) {
        // Check for token in cookies
        token = req.cookies.token;
    }

    // If no token found
    if (!token) {
        throw new AuthenticationError({ status: 401, message: 'Token not found' });
    }

    try {
        // Verify token
        await jwt.verify(token, "SREESRCOM");
        next();
    } catch (error) {
        throw new AuthenticationError({ status: 401, message: 'Invalid Token' });
    }
}

module.exports = {
    checkToken
};
