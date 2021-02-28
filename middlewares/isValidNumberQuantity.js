const Boom = require('@hapi/boom');
const Joi = require('joi');

module.exports = (req, _res, next) => {
  const { quantity } = req.body;

  const schema = Joi.number().integer().required();
  const { error } = schema.validate(quantity);
  const isValid = error === null;

  if (!isValid) {
    return next(Boom.badData('"quantity" must be a number'));
  }

  next();
};
