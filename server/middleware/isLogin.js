const jwt = require('jsonwebtoken')
require('dotenv').config()
const secret = process.env.secretKey

const isLogin = function(req, res, next){
  // verify a token symmetric
  jwt.verify(req.headers.token, secret, function(err, decoded) {
    if(err){
      console.log(err)
      res.send('please login first')
    }else{
      req.headers.decoded = decoded
      next()
    }
  })
}

module.exports = {
  isLogin
}
