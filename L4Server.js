// Setup empty JS object to act as endpoint for all routes
projectData = {

};
// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('L4-async'));

const port = 8000;
// Spin up the server
const server = app.listen(port, listening);
// const server = app.listen(port, ()=>{console.log(`running on localhost: ${port}`)})
// Callback to debug
 function listening(){
    console.log('server running');
    console.log(`running on localhost: ${port}`);

  };

// No Callback
// app.get('/all', function(request, response){
//     response.send(projectData)
// })


// Animal Web API Example

// Dummy API Enpoint 
const fakeData = {
  animal: 'lion',
  fact: 'lions are fun'
}


app.get('/fakeAnimalData', getFakeData)

function getFakeData(req, res){
  res.send(fakeData)
}


const animalData = [];

app.get('/all', getData)

function getData(req,res){
  res.send(animalData)
  console.log(animalData)
}

// POST ROUTE

app.post('/addAnimal', addAnimal);

function addAnimal(req,res){

  newEntry = {
    animal: req.body.animal,
    facts: req.body.fact,
    fav: req.body.fav
  }

  animalData.push(newEntry)
  res.send(animalData)
  console.log(animalData)
}


