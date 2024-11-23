require('dotenv').config()
const express=require("express");
const app=express();
const port=4000;

app.get("/", (req, res)=>{
    res.send("Hello bro :)");
})


app.get("/appna", (req, res)=>{
    res.send("Appna.com");
})

app.get("/youtub", (req, res)=>{
    res.send("<h2> welcome to may block </h2>");
})

app.listen(4000, () => {
    console.log('Server running on port 4000');
});
