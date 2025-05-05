const secretKey = "a95db5f1c28732b58b9b0acf504ffd766465beb193a61d08122aaecfc894c352"
const jwt = require('jsonwebtoken')
const users = require('../models/users')

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader) {
        next()
    } else {
        try {
            const token = authHeader.split(' ')[1]
            const verifyToken = jwt.verify(token, secretKey)
            const user = users.find(user => user.email === verifyToken.email)
            req.userAuthorization = user
            next()
        } catch (error) {
            res.status(401).json({ error: error.message })
        }
    }
}

module.exports = authMiddleware