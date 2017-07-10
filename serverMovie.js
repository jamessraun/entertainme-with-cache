var app = require('express')()
var mongoose = require('mongoose')
var bodyParser = require('body-parser')

var api= require('./api')

mongoose.connect('mongodb://localhost/entertainme');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/',api)

app.listen(3001,()=>{
  console.log('connected');
})
