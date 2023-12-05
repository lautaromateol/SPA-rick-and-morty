const Router = require("express")
const usersRouter = require("./usersRouter")
const favoritesRouter = require("./favoritesRouter")

const router = Router()

router.use('/users', usersRouter)
router.use('/favorites', favoritesRouter)

module.exports = router 