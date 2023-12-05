const { User, Favorite } = require("../../sequelize")

const getUserId = async (req, res) => {
    const { id } = req.params

    try {
        const user = await User.findOne({ where: { id }, include: { model: Favorite, through: { attributes: []} }})
        res.status(200).json(user)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = getUserId