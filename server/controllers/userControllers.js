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

const createUserViaRegister = function(req, res){
  const saltRounds = 10
  bcrypt.hash(req.body.input_password, saltRounds).then(function(hash){
    let newUser = User({
      name : req.body.input_name,
      username : req.body.input_username,
      email : req.body.input_email,
      password : hash,
      via : 'register'
    })
    newUser.save().then(function(data){
      console.log(data)
      res.status(201).send(data)
      console.log('User Created Via Register')
    }).catch(function(err){
      res.status(500).send(err)
      console.log(err)
    })
  }).catch(function(err){
    res.status(500).send(err)
    console.log('password crypt', err)
  })
}

module.exports = {
  createUser,
  getAllUsers,
  createUserViaRegister
}