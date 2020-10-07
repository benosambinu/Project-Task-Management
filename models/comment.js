const mongoose = require("mongoose")
const Task = require("../models/task")
const User = require("../models/user")

const Schema = mongoose.Schema

const CommentSchema = mongoose.Schema({
    commentId: Schema.Types.ObjectId,
    commentdPersonId: {
        type: Schema.Types.ObjectId,
        ref:"User"
    },
    commentedTaskId: {
        type: Schema.Types.ObjectId,
        ref: "Task"
    },
    message: String,
    lastUpdated:{ type: Date, default: Date.now() }},
    {versionKey: false})
const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;
