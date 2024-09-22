const fs = require('fs');



// Nodejs  Basics:
// Introduction to  Node.Js
// Installing NOde.js and npm.
// Working with modules.
// File System operations.
// Understanding HTTP Module 


// Create a file

// fs.writeFile("text.exe", "Hello kishea ho ",function(err){
//     if(err) console.log(err);
//     else console.log("done");
// })
 

//  open a file

// fs.appendFile("text.exe", "me to aacha hu. aur tu. bataaa ",function(err){
//     if(err) console.log(err);
//     else console.log("done");
// })
 
 
// Rename a file

//  fs.rename("text.exe", "hello.txt" ,function(err){
//    if(err) console.log(err);
//      else console.log("done");
//  })


// Copy File

// fs.copyFile("hello.txt" , "./copy.txt", function(err){
//     if(err) console.log(err);
//       else console.log("done");
// })


// Delete File

// fs.unlink("copy.txt",function(err){
//     if(err) console.log(err);
//        else console.log("done");
// })

// Delete Folder

// fs.rmdir("./copy.txt", {recursive:true}, function(err){
//      if(err) console.log(err.message);
//         else console.log("removed");
// })

// Delete a file 

fs.rm("./copy.txt", {recursive:true}, function(err){
     if(err) console.log(err.message);
        else console.log("removed");
})