const Router = require("express")
const newFavorite = require("../controllers/favorites/newFavorite")
const deleteFavorite = require("../controllers/favorites/deleteFavorite")
const filterFavorites = require("../controllers/favorites/filterFavorites")

const favoritesRouter = Router()

favoritesRouter.post('/new-favorite', newFavorite)

favoritesRouter.delete('/delete-favorite', deleteFavorite)

favoritesRouter.get('/filter', filterFavorites)

module.exports = favoritesRouter