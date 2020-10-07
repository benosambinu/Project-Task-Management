const mongoose = require("mongoose")
const Schema = mongoose.Schema
const FileAttachment = require("../models/fileAttachment")
const Comment = require("../models/comment")

const TaskSchema = mongoose.Schema({
    taskId: Schema.Types.ObjectId,
    taskTitle: String,
    taskType:{
        type: String,
        enum: ["Feature", "Subtask", "Enhancement", "Bug", "Task"]
    },
    taskDescription: String,
    acceptanceCriteria: String,
    taskStatus: String,
    startDate: Date,
    dueDate: Date,
    originalEstimate: String,
    assignee: String,
    reporter: String,
    taskComments: [{type: Schema.Types.ObjectId, ref: "Comment"}],
    taskFiles: [{type: Schema.Types.ObjectId, ref: "TaskFile"}]},
    {versionKey: false})

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;