const express =require('express')

const app=express;

app.use(express.json());
app.use(express.urlencoded({exended:true}));

app.get("/",function(req,res){
    res.send("Data chal reha hai ")
});
app.listen(3000, function(){
    console.log("it running");
    
})