var mongoose = require('mongoose');  
var InventoryCardSchema = new mongoose.Schema({  
  UserID: Number,
  Quantity: Number,
  Name: String,
  SetCode: String,
  GathereID: Number,
  Type: String,
  Price: Number,
  Decks: Array
});
mongoose.model('InventoryCard', InventoryCardSchema);
module.exports = mongoose.model('InventoryCard');