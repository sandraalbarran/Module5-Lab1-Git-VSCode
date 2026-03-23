const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');

const app = express();
const PORT = 3000;

app.use(loggerMiddleware);

app.get('/', (req, res) => {
  res.send('Middleware is working v2');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});