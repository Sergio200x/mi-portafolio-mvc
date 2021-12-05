const express = require('express');
const router = express.Router();
const controllers = require('../controllers/Controller.js')


router.get("/", controllers.main)

module.exports=router