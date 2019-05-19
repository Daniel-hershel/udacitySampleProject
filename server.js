testData = {

}
const fs = require('fs');
const cpuData = fs.readFileSync('externalData.json');
// const data = JSON.parse(cpuData)
// console.log(data)
//express to run server
const express = require('express');
const axios = require('axios');
//cors for cross origin aloowance
var cors = require('cors');

//start up an instance of app. This needs to go before any of the things below which are attached to the app
const app = express();
app.use(cors());

const server = app.listen(3000, listening)
//callback to debug
function listening(){
  console.log('listening');
    }
app.use(express.static('website'))

// app.get('/add/:temp/:feel', addEntry)
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.get('/all', sendData)

function sendData (req, res) {
  // res.send('Working')
  res.send(testData)
}

app.get('/add/:temp/:feel', addEntry)
function addEntry(request, response){
  let data = request.params;
  console.log(data)
  let temp = data.temp;
  let feel= data.feel;
  
  testData["temp"] = temp;
  testData["feel"] = feel;
  response.send(testData)

  console.log(testData)
}