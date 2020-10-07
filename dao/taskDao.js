
const taskCollection = require("../models/task")


exports.addTask = (req,res,next) => {
    const task = new taskCollection({
        taskTitle:req.body.taskTitle,
        taskType:req.body.taskType,
        taskDescription:req.body.taskDescription,
        acceptanceCriteria:req.body.acceptanceCriteria,
        taskStatus:req.body.acceptanceCriteria,
        startDate:req.body.startDate,
        dueDate:req.body.dueDate,
        assignee:req.body.assignee,
        reporter:req.body.reporter
    })

    task.save().then(data => {
        res.send(`The task has been added with ID = ${data._id}`)
    }).catch(err =>{
        res.json({message:err})
    })
}

exports.updateTask = (req,res,next) => {
    taskCollection.findOneAndUpdate({_id:req.query.taskId}, req.body,{new: true}, function (err, place) {
        res.send(place);
      });

}

exports.listTask = (req,res,next) => {
    const taskId = req.query.taskId
    taskCollection.find({"_id":taskId}).then(data => {
        res.send(data)
    }).catch(err =>{
        res.json({message:err})
    })

}