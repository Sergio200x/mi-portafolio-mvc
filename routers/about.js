const express = require('express');
const router = express.Router();
const controllers = require('../controllers/Controller.js')


router.get("/about", controllers.about)

module.exports=router