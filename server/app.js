const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
<<<<<<< HEAD
const mongoose = require('mongoose');
=======
const mongoose = require('mongoose')
const cors = require('cors')

>>>>>>> dev
const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// mongoose connect
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/siriusProject')
.then(() =>  console.log('db connection succesfull'))
.catch((err) => console.error(err));

//routes
const users = require('./routes/api_user')
app.use('/api', users)

app.listen(3000, function(err){
  if(!err) console.log('server listen on port | 3000')
})
