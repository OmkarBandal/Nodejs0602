const serverless = require('serverless-http');
const express = require('express');
const router = require('../routers/page');

const app = express();

app.use(express.json());
app.use("/", router);

module.exports = serverless(app);