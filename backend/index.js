import express from "express";
const app = express();

app.use(express.json())

let id = 1;

// To store all data in array
const ToDoarray = []

// create the data
app.post("/createdata",(req,res)=>{
    const newdata = {
        id:id++,
        title:req.body.title,
        discription:req.body.discription
    }
    console.log(req.body);
    ToDoarray.push(newdata)
    res.status(200).json(newdata) 
   
})

//get the data
app.get("/getdata",(req,res)=>{
    res.status(200).json(ToDoarray)
})

//update the data
app.put("/update",(req,res)=>{
    const id ={
        id:req.body.id,
        title:req.body.title,
        discription:req.body.discription
    }
    const update = ToDoarray.findIndex(ToDoarray=>ToDoarray.id === id.id);
    console.log(update);
    
    if(update != -1){
        ToDoarray[update].title = req.body.title,
        ToDoarray[update].discription = req.body.discription  
        res.status(200).json(ToDoarray)
      
    }else{
        res.status(404).json("not found")

    }
})

//delete the data
app.delete("/delete/:id",(req,res)=>{
    const delid= req.params.id
    const del = ToDoarray.findIndex(ToDoarray=>ToDoarray.id === delid)
    if (del != -1){
        ToDoarray.splice(del,1)
        res.status(200).json("dygttdyjfut")
    
    }else{
        res.status(404).json(err)
    }
}) 

app.listen(5000,()=>{
    console.log("server is running");
})
