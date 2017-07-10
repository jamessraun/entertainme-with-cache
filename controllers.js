var { Movie,Tv,Tag } =require('./models')

var getMovies = ( req,res ) => {
  Movie.find({},(err,movies)=>{
    res.json(movies)
  })
}

var createMovie = (req,res) =>{

  let new_movie = new Movie({
    title : req.body.title,
    poster_path : req.body.poster_path,
    overview : req.body.overview,
    popularity : req.body.popularity,
  })

  new_movie.save((err,movie) => {
    if(err) console.log(err);
    else res.send(movie)
  })
}


var getTvSeries = ( req,res ) => {
  Tv.find({},(err,tv_series)=>{
    res.json(tv_series)
  })
}

var createTvSerial = (req,res) =>{

  let new_tvSerial = new Tv({
    name : req.body.name,
    poster_path : req.body.poster_path,
    overview : req.body.overview,
    popularity : req.body.popularity,
  })

  new_tvSerial.save((err,tv_serial) => {
    if(err) console.log(err);
    else res.send(tv_serial)
  })
}

var getTags = ( req, res )=>{
  Tag.find({},(err,tags)=>{
    res.json(tags)
  })
}


module.exports = {
  getMovies,
  createMovie,
  createTvSerial,
  getTvSeries,
  getTags
}
