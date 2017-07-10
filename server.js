const app = require('express')()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const responseTime = require('response-time')
const api= require('./api')

app.use(responseTime())

mongoose.connect('mongodb://localhost/entertainme');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/',api)

app.listen(3000,()=>{
  console.log('connected');
})
