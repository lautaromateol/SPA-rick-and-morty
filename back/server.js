const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const router = require("./router/index")
const { conn } = require("./sequelize")

const server = express()

server.use(morgan("dev"))
server.use(express.json())
server.use(cors())
server.use(router)

conn.sync({ force: false }).then(() => {
server.listen(3001, () => {
    console.log("Server running on port 3001")
    }
)})