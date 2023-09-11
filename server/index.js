const express = require("express")

require("./config/Database")
const todoRoute = require("./Routes/todoRoute")
require("dotenv").config()
const cors = require("cors")
const {NotFound , ErrorHandler} = require("./middleWare/ErrorHandler")

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended :true}))
app.use(cors())

const port = process.env.PORT || 3000



app.listen(port , () => {
    console.log(`start working ${port}`);
})


app.use('/api/todolist' , todoRoute)
app.use(NotFound)
app.use(ErrorHandler)
