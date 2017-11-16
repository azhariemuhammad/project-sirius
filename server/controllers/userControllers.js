const ObjectId = require('mongodb').ObjectID
const User = require('../models/userModels')

let createUser = function(req,res){
  let newUser = User({
    name : req.body.name,
    username : req.body.username,
    email : req.body.email,
    password : req.body.password,
    via : 'register'
  })
  newUser.save().then(function(){
    res.status(201).send('User Register Created')
  }).catch(function(err){
    res.status(500).send(err)
    console.log(err)
  })
}

module.exports = {
  createUser
}