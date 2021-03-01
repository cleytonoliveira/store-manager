const Boom = require('@hapi/boom');

module.exports = (err, _req, res, _next) => {
  const badImplementation = 500;
  
  if (Boom.isBoom(err)) {
    const { statusCode, payload } = err.output;
    
    if (payload.error === 'Not Found') {
      return res
        .status(statusCode)
        .json({ err: { code: 'not_found', message: payload.message } });
    };

    return res
      .status(statusCode)
      .json({ err: { code: 'invalid_data', message: payload.message } });
  };

  return res
    .status(badImplementation)
    .json({ err: { code: 'invalid_data', message: err.message } });
};
