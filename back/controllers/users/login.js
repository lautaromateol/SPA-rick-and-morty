const bcrypt = require("bcrypt")
const { User } = require("../../sequelize")
const {JWT_SECRET} = process.env
const jwt = require("jsonwebtoken")

const login = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ where: { email } })
        if (!user) return res.status(400).send({error: "This email is not registered"})
        const decryptedPassword = await bcrypt.compare(password, user.password)
        if (!decryptedPassword) return res.status(403).send({error: "Incorrect password"})
        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET)
        return res.status(200).send({ token, id: user.id })
    }
    catch (error) {
        res.status(500).send(error)
    }

}

module.exports = login