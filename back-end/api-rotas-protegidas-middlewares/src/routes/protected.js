const express = require('express')
const protectedController = require('../controllers/protectedController')
const authMiddleware = require('../middlewares/auth-optional')
const authRule = require('../middlewares/auth-rule')


const protectedRouter = express.Router()
protectedRouter.get('/protected', authMiddleware, authRule, protectedController.protected)
protectedRouter.post('/protected/newUser', authMiddleware, authRule, protectedController.newUser)
protectedRouter.get('/protected/listUsers', authMiddleware, authRule, protectedController.listUsers)
protectedRouter.get('/protected/listUsers/:email', authMiddleware, authRule, protectedController.showUser)
protectedRouter.delete('/protected/listUsers/:email/delete', authMiddleware, authRule, protectedController.deleteUser)

module.exports = protectedRouter