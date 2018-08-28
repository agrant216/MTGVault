var mongoose = require('mongoose');  
var LocationSchema = new mongoose.Schema({  
  LocName: String,
  type: String,
  quantity: Number
});
mongoose.model('Location', LocationSchema);
module.exports = mongoose.model('Location');