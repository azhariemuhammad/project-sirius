const express = require('express')
const Users = require('../controllers/userControllers')
const verify = require('../middleware/islogin')
const router = express.Router()

router.get('/users', Users.getAllUsers)
router.post('/users/register', Users.createUserViaRegister)
router.post('/users/login', Users.loginUsers)

module.exports = router