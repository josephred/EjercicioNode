const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use('/api',require('./routes/index'));

module.exports = app;