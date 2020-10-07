const mongoose = require("mongoose")
const Schema = mongoose.Schema
const Task = require("../models/task")

const FileSchema = mongoose.Schema({
    fileId: Schema.Types.ObjectId,
    fileName: String,
    fileLocation: String,
    fileTaskId: {
        type: Schema.Types.ObjectId,
        ref: "Task"
    }},{versionKey: false})

const TaskFile = mongoose.model('TaskFile',FileSchema);
module.exports = TaskFile;