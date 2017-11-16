const express = require('express')
const users = require('../controllers/userControllers')
const router = express.Router()

router.post('/', users.createUser)

module.exports = router