const Boom = require('@hapi/boom');
const Joi = require('joi');

module.exports = (req, _res, next) => {
  const { quantity } = req.body;

  const minimumQuantityOfProduct = 1;
  const schema = Joi.number().min(minimumQuantityOfProduct);
  const { error } = schema.validate(quantity);
  const isValid = error === null;
  
  if (!isValid) {
    return next(Boom.badData('"quantity" must be larger than or equal to 1'));
  }

  next();
};
