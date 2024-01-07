 const fs= require("fs");
//  fs.writeFile("Test.txt","Today is awesome day ",(err)=>{
//     console.log("complet");
//     console.log(err);
//  });

fs.readFile("Test.txt","UTF-8",(err, data)=>{
    console.log("complet");
    console.log(data);
 });