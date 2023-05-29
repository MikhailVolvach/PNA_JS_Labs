const express = require('express');

const router = require('./internal/router');

const server = express();

const host = 'localhost';
const port = 8000;

server.use(express.json());

server.use('/users', router);

server.listen(port, host, () => {
    console.log(`Listening port ${port} on host ${host}`);
});