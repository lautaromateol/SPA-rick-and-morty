const { Favorite } = require("../../sequelize")

const deleteFavorite =  async(req, res)=> {
    const {id} = req.query
    try {
        const favorite = await Favorite.findOne({where: {id}})
        await favorite.destroy()
        res.status(200).send("Character removed")
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = deleteFavorite