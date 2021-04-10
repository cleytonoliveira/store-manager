const Boom = require('@hapi/boom');

module.exports = (err, _req, res, _next) => {
  const badImplementation = 500;

  if (Boom.isBoom(err)) {
    const { statusCode, payload } = err.output;

    return res
      .status(statusCode)
      .json({ err: { code: err.data, message: payload.message } });
  };

  return res
    .status(badImplementation)
    .json({ err: { code: 'invalid_data', message: err.message } });
};
