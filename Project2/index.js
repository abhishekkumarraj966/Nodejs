const express = require("express");  //Correctly initialize express js
const path = require("path"); // Make sure to require the 'path' module
const app = express(); // Correctly initialize express
const fs = require("fs"); // Correctly initialize fs module
const { log } = require("console");
const { console } = require("inspector");
const port = 3000;


// Set the view engine to ejs
app.set("view engine", "ejs");

// Middleware to handle JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public"))); // Corrected 'path.join'

// Define a route  ye home page ka route hai 
app.get("/", function (req, res) {
  fs.readdir(`./files`, function (err, files) {
    res.render("index.ejs", {files: files});
  });
});

// data show ke reha hai  show page pe 
app.get("/file/:filename", function (req, res) {
  fs.readFile(`./files/${req.params.filename}`, "utf-8", function(err, filedata){
    res.render("show.ejs", {filename: req.params.filename, filedata:filedata});
  })
});

// create kr ke post kr  reha hai  home page pe 
app.post("/create", function (req, res) {
 fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function(err){
res.redirect("/")
 })
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
