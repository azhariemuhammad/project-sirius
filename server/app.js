const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// mongoose connect
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/siriusProject')
.then(() =>  console.log('db connection succesful'))
.catch((err) => console.error(err));

//routes
const users = require('./routes/user')

app.use('/api/users', users)

app.listen(3000, function(err){
  if(!err) console.log('server listen on port | 3000')
})