require('dotenv').config();

const express = require('express');
const server = express();

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

server.use(express.json());

server.use('/', (req, res) => {
  res.send(`
    <h1>Store API</h1>
    <a href="/api/v1/products">See Products</a>
  `);
});

server.use(notFoundMiddleware);
server.use(errorMiddleware);

const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    server.listen(port, console.log(`Server is running on port ${port}...`));
  } catch (err) {
    console.log(err);
  }
};

startServer();