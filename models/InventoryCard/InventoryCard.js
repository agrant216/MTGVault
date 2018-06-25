var mongoose = require('mongoose');  
var InventoryCardSchema = new mongoose.Schema({  
  UserID: {type: String, default: '-1'},
  Quantity: {type: Number, default: 0},
  Name: String,
  SetCode: String,
  GathereID: Number,
  Type: String,
  Price: Number,
  Decks: Array
},
{ collection: 'Test_MTG' });
//CREATE DETAIL ID TO FULL CARD FOR CMC, TYPE...

InventoryCardSchema.virtual('imageURL').get(function(){
  return 'imageurl/'+this.GathereID;
});

InventoryCardSchema.virtual('totalPrice').get(function(){
  return (Quantity*Price);
});

mongoose.model('InventoryCard', InventoryCardSchema);
module.exports = mongoose.model('InventoryCard');