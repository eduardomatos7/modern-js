const users = require('../models/users')
const jwt = require("jsonwebtoken")

const secretKey = "a95db5f1c28732b58b9b0acf504ffd766465beb193a61d08122aaecfc894c352"

const authController = {

    signUp: (req, res) => {
        const { name, email, password } = req.body
        const user = users.find(user => user.email === email)
        if (user) {
            return res.status(401).json({ message: "email já cadastrado!" })
        }
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Digite todos os campos" })
        }
        const userRegister = {
            name,
            email,
            password,
            papel: "usuário padrão"
        }
        users.push(userRegister)
        res.status(201).json({ message: "Usuário registrado com sucesso!" })
    },

    signIn: (req, res) => {
        const { name, email, password } = req.body
        const user = users.find(user => user.email === email)
        if (!user || password !== user.password) {
            return res.status(401).json({ message: "Usuário ou senha inválidos!" })
        }
        if (!email || !password) {
            return res.status(400).json({ message: "Digite todos os campos" })
        }
        const payload = { name: name, email: email }
        const token = jwt.sign(payload, secretKey, { expiresIn: '1h', })
        res.status(200).json({ message: "logado!", token: token })
    }

}

module.exports = authController