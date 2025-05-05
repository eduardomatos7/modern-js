const jwt = require('jsonwebtoken')
const users = require('../models/users')

const secretKey = "a95db5f1c28732b58b9b0acf504ffd766465beb193a61d08122aaecfc894c352"

const authRule = (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        res.status(401).json({ error: "Usuário não encontrado" })
    } else {
        const token = authHeader.split(' ')[1]
        const verifyToken = jwt.verify(token, secretKey)
        const user = users.find(user => user.email === verifyToken.email)
        if (user.papel === "admin") {
            next()
        }
        else {
            res.status(401).json({ error: "Apenas administradores podem acessar essa área" })
        }
    }
}

module.exports = authRule