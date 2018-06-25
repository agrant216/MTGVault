require('dotenv').config();
var app = require('./app');

var port = 8080;

var mongoose = require('mongoose');

mongoose.connect(process.env.DB_HOST); // connect to our database

global.mongo = mongoose;

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.on("connected",function(err,conn){
  var server = app.listen(port, function() {
    console.log('Express server listening on port ' + port);
  });
});