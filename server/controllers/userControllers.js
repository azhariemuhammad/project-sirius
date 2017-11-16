const ObjectId = require('mongodb').ObjectID
const User = require('../models/userModels')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const secret = process.env.secretKey

const createUser = function(req, res){
  const saltRounds = 10
  bcrypt.hash(req.body.password, saltRounds).then(function(hash){
    let newUser = User({
      name : req.body.name,
      username : req.body.username,
      email : req.body.email,
      password : hash,
      via : 'register'
    })
    newUser.save().then(function(){
      res.status(201).send('User Register Created')
    }).catch(function(err){
      res.status(500).send(err)
      console.log(err)
    })
  }).catch(function(err){
    res.status(500).send(err)
    console.log('password crypt', err)
  })
}

const getAllUsers = function(req,res){
  User.find().then(function(data_Users){
    res.status(200).send(data_Users)
  }).catch(function(err){
    res.status(500).send(err)
  })
}

module.exports = {
  createUser,
  getAllUsers
}