const Boom = require('@hapi/boom');

module.exports = (req, _res, next) => {
  const { name } = req.body;
  
  const minimumOfCharactersName = 5;

  if (name.length < minimumOfCharactersName) {
    next(Boom.badData('"name" length must be at least 5 characters long'));
  }

  next();
};
