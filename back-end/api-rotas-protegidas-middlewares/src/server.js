const express = require('express')
const protectedRouter = require('./routes/protected')
const authRouter = require('./routes/auth')
const authMiddleware = require('./middlewares/auth-optional')
const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use(protectedRouter)
app.use(authRouter)

app.get('/', authMiddleware, (req, res) => {
    const user = req.userAuthorization
    if (user) {
        res.json({ message: `Olá, ${user.name}` })
    } else {
        res.json({ message: "Olá, visitante" })
    }
})
app.listen(PORT, console.log(`Servidor iniciado em http://localhost:${PORT}`))
