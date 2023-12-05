const { User } = require("../../sequelize")
const bcrypt = require("bcrypt")

const register = async (req, res) => {
    const { email, password } = req.body

    try {
        const mailValidation = await User.findOne({ where: { email } })
        if (mailValidation) return res.status(400).json({error: "This email is also registered"})
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({ email, password: hashedPassword })
        res.status(200).json(user)
    } catch (error) {
        res.status(500).send(error.message)
    }

}

module.exports = register