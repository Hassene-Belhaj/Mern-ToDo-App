const express = require("express")
const {createTodo, deleteTodo, updateTodo, getSingleTodo, getAllTodo } = require("../Controller/todoController")

const router = express.Router()



router.get('/get/:id'  , getSingleTodo)
router.get('/all'  , getAllTodo)
router.post('/post'  , createTodo)
router.delete('/delete/:id'  , deleteTodo)

router.route('/').get(getAllTodo).post(createTodo)

router.route('/update/:id')
.get(getSingleTodo)
.put(updateTodo)
.post(createTodo)



module.exports = router