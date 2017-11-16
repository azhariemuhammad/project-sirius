const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
//const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// mongoose connect
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/siriusProject')
// .then(() =>  console.log('db connection succesful'))
// .catch((err) => console.error(err));

//routes
const api = require('./routes/index')

//app.use('/api', api)

app.listen(4002, function(err){
  if(!err) console.log('server listen on port | 4500')
})
