const Boom = require('@hapi/boom');
const Joi = require('joi');

module.exports = (req, _res, next) => {
  const quantity = req.body;

  quantity.forEach(sale => {
    const minimumQuantity = 1;
    const schema = Joi.number().min(minimumQuantity).integer().required();
    const { error } = schema.validate(sale.quantity);
    const isValid = error === null;
  
    if (!isValid) {
      return next(Boom.badData('Wrong product ID or invalid quantity'));
    }
  });

  next();
};
