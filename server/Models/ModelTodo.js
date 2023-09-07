const mongoose = require('mongoose')

var TodoSchema = new mongoose.Schema({
    task:{
        type:String,
        required:true,
    },
},
    {timestamps : true}
);

module.exports = mongoose.model('Todo', TodoSchema);