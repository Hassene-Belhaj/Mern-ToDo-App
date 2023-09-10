
// const asyncHandler = require("express-async-handler")
const Todo = require('../Models/ModelTodo')
const asyncWrapp = require('../middleWare/Async')
const { createCustomError } = require('../middleWare/ErrorHandler.js')


const getSingleTodo = asyncWrapp( async (req,res,next) => {
      const {id : todoID} = req.params
      const todo = await Todo.findOne({_id : todoID})
      if(!todo) { 
         return next(createCustomError(`no todo with id : ${todoID}`, 404))
      } 
      res.status(200).json({succes :true , data : todo})
      
})



const getAllTodo = asyncWrapp(async (req , res) => {
      const todos =  await Todo.find({})
      res.status(200).json({succes : true , data : {todos , nbHits : todos.length}})
}) 


const createTodo = asyncWrapp( async (req,res) => { 
 
      const {name} = req.body
      const todo = await Todo.create({
      name : name ,
   })
      res.status(201).json({succes : true , data : todo})
 
 })
 
 const deleteTodo = asyncWrapp( async (req ,res,next) => {
       const {id : todoID} = req.params
       const findTodo = await Todo.findOneAndDelete({_id : todoID})
       if(!findTodo) {
         return next(createCustomError(`no todo with id : ${todoID}`, 404))

         } 
         res.status(200).json({succes : true , data : null})
   })
   
   
   const updateTodo = asyncWrapp( async (req ,res , next) => {
      const {id : todoID} = req.params
      const todo = await Todo.findOneAndUpdate({_id : todoID} , req.body , {
         new : true , 
         runValidators :true
      })
      if(!todo) {
         return next(createCustomError(`no todo with id : ${todoID}`, 404))
      }
      res.status(201).json({succes : true , data : todo})
   })
   
module.exports = {getSingleTodo , getAllTodo , createTodo , updateTodo , deleteTodo}