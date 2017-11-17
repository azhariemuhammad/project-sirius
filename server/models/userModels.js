const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name : String,
  username : String,
  email : String,
  password : String,
  via : String
})

const userModels = mongoose.model('Users', UserSchema)

module.exports = userModels