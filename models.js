var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema = new Schema({
  title : String,
  poster_path : String,
  overview : String,
  popularity : Number,
  tag : [{ type: Schema.Types.ObjectId, ref:'Tag' }]
});

var tvSchema = new Schema({
  name : String,
  poster_path : String,
  overview : String,
  popularity : Number,
  tag : [{ type: Schema.Types.ObjectId, ref:'Tag' }]
});

var tagSchema = new Schema({
  text:String
})

var Movie = mongoose.model('Movie',movieSchema);
var Tv = mongoose.model('Tv',tvSchema);
var Tag = mongoose.model('Tag',tagSchema)


module.exports ={
  Movie,
  Tv,
  Tag
}
