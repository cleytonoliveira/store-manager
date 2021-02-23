module.exports = (err, _req, res, _next) => {
  const { statusCode, payload } = err.output;
  res
    .status(statusCode)
    .json({ err: { code: 'invalid_data', message: payload.message } });
};
