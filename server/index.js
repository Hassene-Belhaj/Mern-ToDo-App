const express = require("express")
require("./config/Database")
const todoRoute = require("./Routes/todoRoute")
const NotFound = require("./middleWare/NotFound")
const ErrorHandlerMiddle = require('./middleWare/ErrorHandlerMiddleware')
const cors = require("cors")

require("dotenv").config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended :true}))
app.use(cors())

const port = process.env.PORT || 3000

app.listen(port , () => {
    console.log(`start working ${port}`);
})

app.get('/' , (req,res) => {
    res.send("server is runnig !!!")
})



app.use('/api/todolist' ,  todoRoute)
app.use(NotFound)
app.use(ErrorHandlerMiddle)