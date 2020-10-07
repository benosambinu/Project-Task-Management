const mongoose = require('mongoose')
const userCollection = require('../models/user')

exports.createUser = (req, res, next) => {
    const user = new userCollection({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        userRole: req.body.userRole
    });
    user.save().then(data =>{
        res.send(`User ${data.name} is added`)
    }).catch(err =>{
        res.json({message:err})
    })
}

exports.listUser = (req,res,next) => {
    userCollection.find({},{"password":0}).then(data => {
        res.send(data)
    }).catch(err =>{
        res.json({message:err})
    })
}