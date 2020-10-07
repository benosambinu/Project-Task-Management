
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new mongoose.Schema({
    userId: Schema.Types.ObjectId,
    name: String,
    email: String,
    password: String,
    userRole: {
        type: String,
        enum: ["Super_Admin", "Project_Manager", "User"],
        default:"User"
    }},
    {
        versionKey: false}
    )

const User = mongoose.model('User', UserSchema);
module.exports = User;