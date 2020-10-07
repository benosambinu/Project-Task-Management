const express = require("express")
const taskRoute = express.Router()
const taskControl = require("../dao/taskDao")


taskRoute.post("/add-task", taskControl.addTask)
taskRoute.get("/list-task", taskControl.listTask)
taskRoute.put("/update-task", taskControl.updateTask)


module.exports = taskRoute;