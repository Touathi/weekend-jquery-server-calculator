const express = require('express');
const bodyParser = require('body-parser')
const runCalculation = require('../modules/runCalculation')
// ---------------- require stuff stay above ----------------//
const app = express();

// localhost:5000
const PORT = process.env.PORT || 5000;

// Use bodyParser "use for post"
app.use(bodyParser.urlencoded({extended:true}))

// Get public Files html/css/script.js
app.use(express.static('public'))

// Calculation History Array
const calculationHistory = []

// Switch statment


//  app.GET  HERE 
app.get('/calculation', function (req, res) {
    console.log('GET Request for /runCalculation was made');
    res.send(calculationHistory)
})


// app.POST   HERE
app.post('/calculation', function  (req, res) {
  let data = req.body
console.log( data, 'was sent to server');
  runCalculation(data)
  sum = runCalculation(data)
  const string = `${data.Num1} ${data.operator} ${data.Num2} = ${sum}`
  calculationHistory.push({string,sum})

  res.sendStatus(201)
})



// Start Server!!!  PUT VERY BOTTOM 
app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
