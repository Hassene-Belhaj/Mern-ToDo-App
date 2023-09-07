const express = require("express")
require("./config/Database")
const todoRoute = require("./Routes/todoRoute")

const cors = require("cors")

require("dotenv").config()

const app = express()
app.use(express.json())
app.use(cors())

PORT = process.env._PORT

app.listen(PORT , () => {
    console.log(`start working ${PORT}`);
})

app.get('/' , (req,res) => {
    res.send("server is runnig !!!")
})

app.use('/api/todolist' ,  todoRoute)