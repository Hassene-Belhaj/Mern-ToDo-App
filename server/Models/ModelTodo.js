const mongoose = require('mongoose')

var TodoSchema = new mongoose.Schema({
    name:{
        type:String,
        required :true,
        unique : [true , "name must be unique"],  
        maxLength : [30 , "name can not be more then 30 characters"]
    },
    completed : {
        type : Boolean ,
        default : false
    }
},
    {timestamps : true}
);

module.exports = mongoose.model('Todo', TodoSchema);

