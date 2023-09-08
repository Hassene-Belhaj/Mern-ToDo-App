
const asyncHandler = require("express-async-handler")

const Todo = require('../Models/ModelTodo')


const getSingleTodo = async (req , res) => {
   try {
      const {id : todoID} = req.params
      const todo = await Todo.findOne({_id : todoID})
      if(!todo) {
         return res.status(404).json({msg : `no todo with id : ${todoID}`})
      } 
      
      res.status(200).json({todo})
      
   } catch (error) {
      res.status(500).json({msg : error})
   }
   
}



const getAllTodo =  async (req , res) => {
   try {
      const todos =  await Todo.find({})
      res.status(200).json({todos})
   } catch (error) {   
      res.status(500).json({msg : error})
   }

}


const createTodo = async (req,res) => { 
   try {
      const {name} = req.body
      const todo = await Todo.create({
      name : name ,
   })
      res.status(201).json({newtask})
   } catch (error) {
      res.status(500).json({error})
   }
 } 
 
 const deleteTodo = async (req ,res) => {
    try {
       const {id : todoID} = req.params
       const findTodo = await Todo.findOneAndDelete({_id : todoID})
       if(!findTodo) {
          return res.status(404).json({msg : `no Todo with id : ${todoID} `})
         } 
         res.status(200).json({todo : null , status : 'succes'})
      } catch (error) {
         res.status(500).json({error : error})
      }
   }
   
   
   const updateTodo = async (req ,res) => {
   try {
      const {id : todoID} = req.params
      const findtodo = await Todo.findOneAndUpdate({_id : todoID} , req.body , {
         new : true , 
         runValidators :true
      })
      res.status(201).json({old : findtodo , new : req.body })
   } catch (error) {
      res.status(500).json({error : error})
   }

   }
   
module.exports = {getSingleTodo , getAllTodo , createTodo , updateTodo , deleteTodo}