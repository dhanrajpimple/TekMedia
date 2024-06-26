// authMiddleware.js
const jwt = require('jsonwebtoken');
const config = require('../config');
require('dotenv').config();
module.exports = (req, res, next) => {
  const token = req.headers['authorization'];
  console.log(token);

  if (!token) {
    return res.status(401).json({ auth: false, message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token.split(' ')[1], process.env.secretKey);
    req.userId = decoded.id;
    next();
  } catch (error) {
    console.error('JWT verification error:', error);
    return res.status(401).json({ auth: false, message: 'Failed to authenticate token' });
  }
};
