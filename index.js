
const express = require("express")
const app = express()

require('dotenv').config()

app.use(express.json())

// Mongo DB connection
const mongoose = require("mongoose")
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true},()=>{
    console.log("DB Connected");});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const userRoute = require("./routes/userRoute")
const taskRoute = require("./routes/taskRoute")

app.use("/user",userRoute)
app.use("/task",taskRoute)


app.get("/", (req,res) => {
    res.send("Welcome to the home page")
})

app.listen(3000,() => {
    console.log("listening on 3000")
})