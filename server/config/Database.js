const mongoose = require("mongoose")
require("dotenv").config()


mongoose.connect(process.env._DATABASE).then(() => console.log("connected to database")).catch((error)=>console.log(error))


module.exports = mongoose