// Setup empty JS object to act as endpoint for all routes
projectData = {

};
// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Spin up the server
const server = app.listen(3000, listening);
// Callback to debug
function listening(){
  // console.log(server);
  console.log(app);
};

// Initialize all route with a callback function
app.get('/all', sendData);

// Callback function to complete GET '/all'
function sendData (request, response) {
  // response.send('Green') // If we want to make a mini test framekwork in here
  response.send(projectData);
};

// Test for adding data from the Server side & Route to use on Client side
app.get('/add/:temp/:feel/:date', addEntry);
// Function to execute 
function addEntry(request, response){
  let data = request.params;
  console.log(data);

  let temp = data.temp;
  let feel= data.feel;
  let date= data.date;
  
  // Create new entry for JS Object Endpoint
  projectData["temp"] = temp;
  projectData["feel"] = feel;
  projectData["date"] = date;

  // Send response to Endpoint
  response.send(projectData);
  
  // console.log(projectData);
};




// Depreciated solution of using an external JSON file as route endpoint
// const fs = require('fs');
// const cpuData = fs.readFileSync('externalData.json');
// const data = JSON.parse(cpuData)
// console.log(data)
// Depreciated external JSON solution cont...
// var bodyParser = require('body-parser');
// app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies