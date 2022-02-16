const express =require('express');
const userRouter = express.Router();
const user= require ('../models/users')

//add user

userRouter.post("/add" , async (req,res)=>{
    try {
        let newUser = new user ({...req.body});
        let result = await newUser.save()
        res.send({result,msg:'successfully added'})
        
    } catch (error) {
        console.log(error);
        res.send({msg:'fail'})
    }
})


//delete user

userRouter.delete("/:id" , async (req,res)=>{
    try {
        
        let result = await user.deleteOne({_id:req.params.id})
        result.deletedCount?res.send("successfully deleted"):res.send("not found")
        
    } catch (error) {
        console.log(error);
        res.send({msg:'fail'})
    }
})


//get all users

userRouter.get("/" , async (req,res)=>{
    try {
        
        let result = await user.find()
        res.send({result,msg:'found it'})
        
    } catch (error) {
        console.log(error);
        res.send({msg:'fail'})
    }
})

//update one

userRouter.put("/:id" , async (req,res)=>{
    try {
        
        let result = await user.findByIdAndUpdate({_id:req.params.id}, { age: '20' })
        res.send({result,msg:'updated'})
        
    } catch (error) {
        console.log(error);
        res.send({msg:'fail'})
    }
})





module.exports=userRouter