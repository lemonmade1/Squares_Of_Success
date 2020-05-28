const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = function(req, res, next) {

  // CHECK FOR TOKEN 
  let token = req.get('Authorization') || req.query.token || req.body.token;
  if (token) {

    // REMOVE BEARER IF INCLUDED
    token = token.replace('Bearer ', '');

    // CHECK VALIDITY OF TOKEN
    jwt.verify(token, SECRET, function(err, decoded) {
      if (err) {
        next(err);
      } else {
        
        // IF TOKEN VALID, ADD USER
        req.user = decoded.user;    
        next();
      }
    });
  } else {
    next();
  }
};