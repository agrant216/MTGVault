var app = require('./app');
require('dotenv').config();

var port = 8080;

var mongoose = require('mongoose');

mongoose.connect(process.env.DB_HOST); // connect to our database


var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});