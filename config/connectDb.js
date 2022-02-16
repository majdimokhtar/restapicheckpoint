const mongoose = require('mongoose');


// mongodb+srv://Majdi:<password>@cluster0.msrhy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// E8BIUiA1l7WQGX3k
// Majdi


const connectDB=async() =>{
    try {
        await  mongoose.connect('mongodb+srv://Majdi:E8BIUiA1l7WQGX3k@cluster0.msrhy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
        console.log("database is connected");
        
    } catch (error) {
        console.log(error);
    }
}

module.exports=connectDB;