var mongoose = require('mongoose');  
var InfoCardSchema = new mongoose.Schema({  
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
mongoose.model('InfoCard', InfoCardSchema);
module.exports = mongoose.model('InfoCard');