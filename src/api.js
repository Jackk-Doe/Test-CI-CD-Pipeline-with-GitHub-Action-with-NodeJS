const express = require('express');
const serverless = require('serverless-http');

const sum = require('../helper/sum');


const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World');
});

router.use(express.static('dist'));

router.get('/sum', (req, res) => {
    const { a, b } = req.query;
    res.send(`Result: ${sum(a, b)}`);
});

app.use(`/.netlify/function/api`, router);


module.exports = app;
module.exports.handler = serverless(app);