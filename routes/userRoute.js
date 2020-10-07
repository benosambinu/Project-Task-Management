const express = require("express")
const userRoute = express.Router()
const userControl = require("../dao/userDao")



userRoute.post("/add-user", userControl.createUser)
userRoute.get("/list-user", userControl.listUser)


module.exports = userRoute;