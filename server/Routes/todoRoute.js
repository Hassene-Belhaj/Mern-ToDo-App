const express = require("express")
const { getTodo, createTodo, deleteTodo, updateTodo } = require("../Controller/todoController")

const router = express.Router()



router.get('/get'  , getTodo)
router.post('/post'  , createTodo)
router.delete('/delete'  , deleteTodo)

router.route('/update')
.get(getTodo)
.put(updateTodo)



module.exports = router