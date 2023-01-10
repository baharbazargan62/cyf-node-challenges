// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

const port=process.env.PORT || 9090
//load the quotes JSON
const Quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function(request, response) {
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});
app.get("/quotes",(req,res)=>{
  res.json({Quotes})
})
app.get("/quotes/random",(req,res)=>{
  res.json(pickFromArray(Quotes))
})
app.get("/quotes/search",(req,res)=>{
  
  res.json(Quotes.filter(el=>el.quote.toLocaleLowerCase().includes(req.query.term.toLocaleLowerCase())))
})

//START OF YOUR CODE...

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
const listener = app.listen(port, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
