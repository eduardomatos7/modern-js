const express = require('express')
const authController = require('../controllers/authController')

const authRouter = express.Router()

authRouter.post('/signup', authController.signUp)
authRouter.post('/signin', authController.signIn)
module.exports = authRouter