const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const userSchema = new Schema ({
    name: {type:String,
        required:true},
    age: String,
    email: String
})


module.exports=user=mongoose.model("user",userSchema);