const express = require('express');
require('dotenv').config();
const { PORT } = process.env;
const app = express();
const { ProductsRouter, SalesRouter } = require('./routers');

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', ProductsRouter);
app.use('/sales', SalesRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
