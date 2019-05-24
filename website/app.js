// Possibly setup client side tests here as separate code?

// Personal API Key for OpenWeatherMap API
const apiKey = '&appid=9f15e45060210ec849a698b3298f0bed&units=imperial';

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

// Function called by event listener
function performAction(e) {
  // Retrieve the zipcode entered by the user via the DOM input element with the ID 'zip'
  let userZip = document.getElementById('zip').value;
  // Use the fetch API to retrieve the current weather data for the users zip code
  fetch('http://api.openweathermap.org/data/2.5/weather?zip='+userZip+apiKey)
  // Transform the data into json
  .then((resp) => resp.json())
  // Function to execute once data has successfully been retrieved as JSON-- Creating a new the pieces for a new entry in our JS object endpoint
  .then(function(data){
    // Set vairable to hold values for the current temperature  
    let temp = data.main.temp;
    // Retrieve the users journal entry via the HTML DOM input element with the ID 'feelings'
    let feeling = document.getElementById('feelings').value;
    // Create a new date entry for JS object
    let d = new Date();
    let NewDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
    // Use a chained fetch to access the 'add' route created in the server
    // And create a new entry using the URL structure and the variables retrieved above
    fetch('add/'+ temp + '/'+feeling+ '/'+ NewDate)
    // Transform data into JSON
    .then((resp) => resp.json()
    // Function to execute once second fetch-- to URL 'add' is successfully completed-- to write the results back to the UI for updates to the DOM elements
    .then(function(newData){
      console.log(newData);
      // Fetch the endpoint of /all route set up in server
      fetch('/all')
      // Transform into JSON
      .then((resp) => resp.json())
      .then(function(allData){
        console.log(allData)
        // Write updated data to DOM elements
        document.getElementById('temp').innerHTML = Math.round(allData.temp)+ 'degrees';
        document.getElementById('content').innerHTML = allData.feel
        document.getElementById("date").innerHTML =allData.date
      })
      .catch(function(error) {
      console.log(error);
      });   
    })
    .catch(function(error) {
      console.log(error);
    });
  })
  .catch(function(error) {
      console.log(error);
    });   


}
