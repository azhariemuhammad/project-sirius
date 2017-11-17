const ObjectId = require('mongodb').ObjectID
const User = require('../models/userModels')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const secret = process.env.secretKey

const createUserViaFb = function(req, res){
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

const loginUsers = function(req,res){
  User.find({username:req.body.input_username}).then(function(data_User){
    if(data_User){
      bcrypt.compare(req.body.input_password, data_User[0].password).then(function(result){
        if(result){
          console.log(data_User[0])
          jwt.sign({
            id : data_User[0].id,
            username : data_User[0].username
          }, secret, function(err, token) {
            if(!err){
              console.log('this token >>', token)
              res.status(201).send({
                success: true,
                message: 'Enjoy your token!',
                token: token
              })
            }
          })
        }
      })
    }
  }).catch(function(err){
    if(err){
      res.status(500).send(err)
      console.log(err)
    }
  })
}

module.exports = {
  createUserViaFb,
  getAllUsers,
  loginUsers,
  createUserViaRegister
}