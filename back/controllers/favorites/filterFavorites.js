const { User, Favorite } = require("../../sequelize")

const filterFavorites = async(req, res)=> {
    const {name, gender, status, species, id} = req.query
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character?name=${name}&gender=${gender}&status=${status}&species=${species}`)
        const data = await response.json()
        const user = await User.findOne({where: {id}, include: { model: Favorite, through: { attributes: []}}})
        const favs = user.Favorites
        const favsArr = favs.map((fav) => fav.id)
        const filteredFavs = data.results.filter((fav) => favsArr.includes(Number(fav.id)))
        res.status(200).json(filteredFavs)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = filterFavorites