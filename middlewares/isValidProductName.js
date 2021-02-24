const Boom = require('@hapi/boom');
const Joi = require('joi');

module.exports = (req, _res, next) => {
  const { name } = req.body;

  const minimumOfCharactersName = 5;
  const schema = Joi.string().min(minimumOfCharactersName);
  const { error } = schema.validate(name);
  const isValid = error === null;

  if (!isValid) {
    return next(Boom.badData('"name" length must be at least 5 characters long'));
  }

  next();
};
