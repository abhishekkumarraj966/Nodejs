// http and https

// const http=require("node:http");

// const server=http.createServer(function(req,res){
//     res.end("Hello");
// })

// server.listen(3000);


var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
