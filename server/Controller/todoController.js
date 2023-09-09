
// const asyncHandler = require("express-async-handler")

const Todo = require('../Models/ModelTodo')
const asyncWrapp = require('../middleWare/Async')


const getSingleTodo = asyncWrapp( async (req , res) => {
   try {
      const {id : todoID} = req.params
      const todo = await Todo.findOne({_id : todoID})
      if(!todo) {
         return res.status(404).json({msg : `no todo with id : ${todoID}`})
      } 
      
      res.status(200).json({succes :true , data : todo})
      
   } catch (error) {
      res.status(500).json({msg : error})
   }
   
})



const getAllTodo = asyncWrapp(async (req , res) => {
   try {
      const todos =  await Todo.find({})
      res.status(200).json({succes : true , data : {todos , nbHits : todos.length}})
   } catch (error) {   
      res.status(500).json({msg : error})
   }

}) 


const createTodo = asyncWrapp( async (req,res) => { 
 
      const {name} = req.body
      const todo = await Todo.create({
      name : name ,
   })
      res.status(201).json({succes : true , data : todo})
 
      res.status(500).json({msg : error})
   
 } )
 
 const deleteTodo = asyncWrapp( async (req ,res) => {
    try {
       const {id : todoID} = req.params
       const findTodo = await Todo.findOneAndDelete({_id : todoID})
       if(!findTodo) {
          return res.status(404).json({msg : `no Todo with id : ${todoID} `})
         } 
         res.status(200).json({succes : true , data : null})
      } catch (error) {
         res.status(500).json({msg : error})
      }
   })
   
   
   const updateTodo = asyncWrapp( async (req ,res) => {
   try {
      const {id : todoID} = req.params
      const todo = await Todo.findOneAndUpdate({_id : todoID} , req.body , {
         new : true , 
         runValidators :true
      })
      res.status(201).json({succes : true , data : todo})
   } catch (error) {
      res.status(500).json({msg : error})
   }

   })
   
module.exports = {getSingleTodo , getAllTodo , createTodo , updateTodo , deleteTodo}