const express = require('express');
const router = express.Router();
const controller = require('./controllers')
const axios= require('axios')
const redis = require('redis')

const client = redis.createClient()
client.on('error', err => {
  console.log(`Error: ${err}`)
})


router.get('/movie',controller.getMovies)
router.post('/movie/new',controller.createMovie)
router.get('/tv',controller.getTvSeries)
router.post('/tv/new',controller.createTvSerial)
router.get('/tag',controller.getTags)


router.get('/entertainme',(req,res) =>{

  let obj = {}

  const getMovie =() => axios.get('http://localhost:3001/movie')
  const getTv = () => axios.get('http://localhost:3002/tv')

  client.get('entertainme',(error,result) => {
    if(result){
      result = JSON.parse(result)
      res.send({
        movies:result.movies,
        tv_series:result.tv_series,
        source:'redis'
      })
    }else {
      console.log('masuk lain');
      const getData = async () => {
        try{

          var movies = await getMovie()
          var tv_series = await getTv()

          obj.movies=movies.data
          obj.tv_series = tv_series.data
          client.setex('entertainme',60,JSON.stringify(obj))
          res.send({
            movies:obj.movies,
            tv_series:obj.tv_series,
            source:'mongodb'
          })
        }
        catch (error){
          res.send(error)
        }
      }
      getData()
    }
  })

  // const getData = async () => {
  //   try{
  //
  //     var movies = await getMovie()
  //     var tv_series = await getTv()
  //
  //     obj.movies=movies.data
  //     obj.tv_series = tv_series.data
  //     res.send(obj)
  //   }
  //   catch (error){
  //     res.send(error)
  //   }
  // }
  //
  // getData()



})


module.exports = router;
