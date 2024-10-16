const express = require("express"); // Import express
const path = require("path");
const app = express(); // Initialize the express app

const port = 4000;

// Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Fixed typo here

// Set EJS as the view engine
app.set("view engine", "ejs");

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// Route to render the index.ejs file
app.get("/", (req, res) => {
  res.render("index"); // No need to specify .ejs extension
});

// Dynamic route for profile with a parameter
app.get("/profile/:name", (req, res) => {
  res.send(`Profile Name: ${req.params.name}`); // Use req.params.name to access the dynamic part
});

app.get("/author/:name/:age", (req, res) => {
  res.send(`${req.params.name}  aap ka age hai ${req.params.age}`); 
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
