// app server setup definitions
var express = require('express');
var app = express();
var PORT = process.env.PORT || 8008;
var morgan = require('morgan');
var baseRouter = require('./routers/base');
var apiRouter = require('./routers/api');
var adminRouter = require('./routers/admin');

// db initialisation call
var db = require('./model/db');

// enable general logging
app.use(morgan('combined'));
// enable access to static files in public directory
app.use(express.static('public'));

// push index calls to launch vue initialisation and SPA
app.use('/', baseRouter);
// push api calls to router for db functionality
app.use('/api', apiRouter);
// push basic admin functionality to appropriate router
app.use('/admin', adminRouter);

// kickoff express server
app.listen(PORT);
console.log('Server running on port: ' + PORT);
