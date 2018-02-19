var mongoose = require('mongoose');  
var InvCardSchema = new mongoose.Schema({  
  UserID: Number,
  Quantity: Number,
  Name: String,
  SetCode: String,
  GathereID: Number,
  Type: String,
  Decks: Array
});
mongoose.model('InvCard', InvCardSchema);
module.exports = mongoose.model('InvCard');