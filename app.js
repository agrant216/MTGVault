//import { request } from 'http';

var express = require('express');
var app = express();
var db = require('./db');
var mongoose = require('mongoose');

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
//mongoose.connection.once('open',function() {
    app.use('/api', router);

    var InventoryCardController = require('./models/InventoryCard/InventoryCardController');
    app.use('/api/cards',InventoryCardController);
//});


module.exports = app;