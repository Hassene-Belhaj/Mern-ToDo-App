const Todo = require('../Models/ModelTodo')


const getTodo = async (req,res) => {
 res.send('get todo')
}

const createTodo = async (req,res) => {
res.send('create todo')    
}

const updateTodo = async (req ,res) => {
res.send('update todo')    
}

const deleteTodo = async (req ,res) => {
res.send('delete todo')    
}


module.exports = {getTodo , createTodo , updateTodo , deleteTodo}