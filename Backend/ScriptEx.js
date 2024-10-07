// introduction  to Express.js
    // Express .js is npm package hai
    // framework
    // manages everything from receiving the request and giving the response

//  Setting up a basic Express application.
// Routing.
// Request and Response  Hendling.Hendling
        // Frontend, Backend, Frontend 

// Middleware
    //  Jab bhi servier request accept karta hai  waha  se route ke beech pahuchne
    // tak ager aap us request ko beech  me rokte ho and and kuch perform karte ho to
    // ye element  middleware kahelata hai

// Error heandling.

const express = require("express");
const app = express();

// Routes Creates Karna
// app.get(route, requestHendler){()};

// 1st taraka  used a middleware
app.use(function (req, res, next) {
  console.log("Middleware chala");
  next();
});

app.use(function (req, res, next) {
  console.log("Middleware chala aur 1 bar ");
  next();
});
// app.get("/", function (req, res) {
//   res.send("champion mera anuj");
// });
// app.get("/about", function (req, res) {
//   res.send("about pg hai 1");
// });
app.get("/profile", function (req, res) {
 return next(new Error("Something went wrong")); 
 
});

// Error Heandling

app.use((err, req, res, next)=>{
    console.log(err.Stack);
    res.status(500).send('Something broke!');
})
app.listen(3000);
