var mongoose = require('mongoose');  
var DetailCardSchema = new mongoose.Schema({  
  layout: String,
  name: String,
  manaCost: String,
  cmc: Number,
  colors: Array,
  type: String,
  types: Array,
  subtypes: Array,
  text: String,
  power: String,
  toughness:String,
  imageName:String,
  colorIdentity:Array
});
mongoose.model('DetailCard', DetailCardSchema);
module.exports = mongoose.model('DetailCard');