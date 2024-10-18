const express = require("express");
const path = require("path"); // Make sure to require the 'path' module
const app = express(); // Correctly initialize express
const fs = require("fs"); // Correctly initialize fs module
const { log } = require("console");
const port = 3000;

// Set the view engine to ejs
app.set("view engine", "ejs");

// Middleware to handle JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public"))); // Corrected 'path.join'

// Define a route
app.get("/", function (req, res) {
  fs.readdir(`./files`, function (err, files) {
    res.render("index.ejs", {files: files});
  });
});


app.post("/create", function (req, res) {
 fs.writeFile(`./files/${req.body.title.split('.').join('')}.txt`, req.body.details, function(err){
res.redirect("/")
 })
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
