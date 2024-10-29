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

// Edit a file name 
app.get("/edit/:filename", function (req, res) {
  res.render('edit', {filename:req.params.filename});
});


// post Edit 
app.post("/edit", function (req, res) {
fs.rename(`./files/${req.body.previous}`, `./files/${req.body.new}`, function(err){
  res.redirect("/");
})
});


// create kr ke post kr  reha hai  home page pe 
app.post("/create", function (req, res) {
  // Check if title exists in the request body
  if (req.body.title) {
    const title = req.body.title.split(' ').join('');
    fs.writeFile(`./files/${title}.txt`, req.body.details || '', function (err) {
      if (err) {
        console.error("Error writing file:", err);
        return res.status(500).send("Error creating file.");
      }
      res.redirect("/");
    });
  } else {
    console.error("Title is missing in the request body.");
    res.status(400).send("Title is required.");
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
