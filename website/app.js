// Personal API Key for OpenWeatherMap API
const apiKey = '&appid=9f15e45060210ec849a698b3298f0bed&units=imperial';

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */
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
    let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
    // Call function to POST data with params
    postData('/add', {temp:temp, feeling:feeling, date:newDate})
    // Call function to Get data and update UI
    retrieveData()

    }).catch(function(error) {
      console.log('There has been a problem with your fetch operation: ', error.message);
    });

/* Function to POST data */
async function postData( url = '', data = {}){
  console.log(data)
    const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    // mode: 'cors', // no-cors, cors, *same-origin
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });

    try {
      const newData = await response.json();
      // console.log(newData);
      return newData
    }catch(error) {
    console.log("error", error);
    // appropriately handle the error
    }
}

/* Function to GET Project Data */
async function retrieveData () { 
  const request = await fetch('/all');
  try {
  // Transform into JSON
  const allData = await request.json()
  console.log(allData)
  // Write updated data to DOM elements
  document.getElementById('temp').innerHTML = Math.round(allData.temp)+ 'degrees';
  document.getElementById('content').innerHTML = allData.feel;
  document.getElementById("date").innerHTML =allData.date;
  }
  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}

}
