// from handling and working with the forms
// handle backend process of forms and making sure the data coming
// from any frontend lib ,  fw, templating engines, we still handle it at the backend
//

const express = require("express");
const app = express;

// tume to bheja the plain text par server ko mila blob which is not directly readable
// ab is cheeg ko  handel karna padega ki hum us blod ko waapas se readable kar sake

app.use(express.json());
app.use(express.urlencoded({ exended: true }));
app.get("/", function (Req, res) {
  res.send("Champion mera anuj");
});
