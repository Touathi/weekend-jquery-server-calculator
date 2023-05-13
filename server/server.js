const express = require('express');

const bodyParser = require('body-parser')

// ---------------- require stuff stay above ----------------//
const app = express();

// localhost:5000
const PORT = 5000;

// Use bodyParser "use for post"
app.use(bodyParser.urlencoded({extended:true}))

// Get public Files html/css/script.js
app.use(express.static('server/public'));




//  app.GET  HERE 



// app.POST   HERE




// Start Server!!!  PUT VERY BOTTOM 
app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
