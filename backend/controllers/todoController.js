const todoModel = require('../models/todoModel');

module.exports.getTodo = async (req, res) => {
    const toDo = await todoModel.find();
    res.send(toDo);
}

module.exports.addTodo = async (req, res) => {
    const { taskName, comment, date} = req.body;

    todoModel.create({taskName, comment, date}).then((data) => {
        console.log(`Item added successfuly in Todo:  ${data}`);
        res.send(data);
    }).catch((e)=>{
        console.log(`Error: ${e}`)
    })
}