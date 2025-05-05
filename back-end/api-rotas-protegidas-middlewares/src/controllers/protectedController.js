const users = require('../models/users')
const jwt = require("jsonwebtoken")


const protectedController = {
    protected: (req, res) => {
        res.status(200).json({ message: "Área protegida" })
    },
    newUser: (req, res) => {
        const { name, email, password } = req.body
        const user = users.find(user => user.email === email)
        if (user) {
            return res.status(401).json({ message: "email já cadastrado!" })
        }
        if (name && email && password) {

            const newUserAdm = { name, email, password, papel: "admin" }
            users.push(newUserAdm)
            res.status(201).json({ message: "usuário cadastrado com sucesso" })
        }
        else {
            res.status(400).json({ message: "Digite todos os campos" })
        }
    },
    listUsers: (req, res) => {
        res.status(200).json(users)
    },
    showUser: (req, res) => {
        const { email } = req.params
        const user = users.find(user => user.email === email)
        if (!user) {
            return res.status(400).json({ message: "Usuário não encontrado" })
        }
        res.status(200).json(user)
    },
    deleteUser: (req, res) => {
        const { email } = req.params
        const userIndex = users.findIndex(user => user.email === email)
        console.log(userIndex)
        if (userIndex === -1) {
            return res.status(400).json({ message: "Usuário não encontrado" })
        }
        users.splice(userIndex, 1)
        res.status(200).json({ message: "Usuário deletado com sucesso" })
    }
}

module.exports = protectedController