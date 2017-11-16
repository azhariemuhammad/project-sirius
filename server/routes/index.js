const express = require('express')
const router = express.Router()
const controller = require('../controllers/indexControllers')




router.get('/apod', controller.getPhoto)


router.get('/currentlocation', controller.getPosition )




module.exports = router
