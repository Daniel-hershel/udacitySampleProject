// Setup empty JS object to act as endpoint for all routes
projectData = {

};
// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

const bodyParser = require('body-parser')
const http = require('http')
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Spin up the server
const server = app.listen(3000, listening);
// Callback to debug
function listening(){
    // console.log(server);
    console.log('on');
  };
  
// Do I need a second server running
// http.createServer(function(req,res){
//   res.write('Hello World!'); //write a response to the client
//   res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080

// Initialize all route with a callback function
app.get('/all', sendData);

// Callback function to complete GET '/all'
function sendData (request, response) {
  // response.send('Green') // If we want to make a mini test framekwork in here
  response.send(projectData);
};

app.post('/add', (request,response)=>{
  // console.log(request.body)
  // add to projectData
  let data = request.body;
  console.log(data.temp);

  // let temp = data.temp;
  // let feel= data.feel;
  // let date= data.date;
  // Create new entry for JS Object Endpoint
  projectData["temp"] = data.temp;
  projectData["feel"] = data.feeling;
  projectData["date"] = data.date;

  // Send response to Endpoint
  response.send(projectData);
  // res.send('updated')
})