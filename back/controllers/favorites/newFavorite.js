const { User, Favorite } = require("../../sequelize")

const newFavorite = async(req, res) => {
    const {userId, favId} = req.body

    try {
        const user = await User.findOne({where: {id: userId}})
        if(user) {
            const newFav = await Favorite.create({id: favId})
            newFav.addUser(user)
            res.status(200).json(newFav)
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = newFavorite