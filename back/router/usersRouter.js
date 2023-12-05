const Router = require("express")
const login = require("../controllers/users/login")
const register = require("../controllers/users/register")
const getUserId = require("../controllers/users/getUserId")

const usersRouter = Router()

usersRouter.post('/login', login)

usersRouter.post('/register', register)

usersRouter.get('/:id', getUserId)

module.exports = usersRouter