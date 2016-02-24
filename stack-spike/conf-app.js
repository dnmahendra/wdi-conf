// app server setup definitions
var app = require('express')();
var PORT = process.env.PORT || 8008;
var morgan = require('morgan');
var baseRouter = require('./routers/base');
var apiRouter = require('./routers/api');

// direct rendering to appropriate views
app.set('views', './views');

// enable general logging
app.use(morgan('combined'));

// push index calls to launch vue initialisation and SPA
app.use('/', baseRouter);
// push api calls to router for db functionality
// app.use('/api', apiRouter);

// kickoff express server
app.listen(PORT);
console.log('Server running on port: ' + PORT);
