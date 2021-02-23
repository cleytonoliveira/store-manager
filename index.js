const { ProductsRouter, SalesRouter } = require('./routers');
const { error } = require('./middlewares');
const BodyParser = require('body-parser');
const express = require('express');
require('dotenv').config();
const { IS_LOCAL } = process.env;
const app = express();
const PORT_EVALUATOR = 3000;
const PORT = (IS_LOCAL)
  ? process.env.PORT
  : PORT_EVALUATOR;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use(BodyParser.json());
app.use('/products', ProductsRouter);
app.use('/sales', SalesRouter);
app.use(error);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
