// const axios = require('axios');
// starting variables
const apiKey = '&appid=9f15e45060210ec849a698b3298f0bed&units=imperial';






//   var instance = axios.create({
//     baseURL: "http://localhost:3000" //use your express server's url(address) and port here
// });
document.getElementById('post').addEventListener('click', performPostRequest);
function performPostRequest(e) {
  let userZip = document.getElementById('zip').value
  fetch('http://api.openweathermap.org/data/2.5/weather?zip='+userZip+apiKey)
  // transform the data into json
  .then((resp) => resp.json())
  .then(function(data){
      let temp = data.main.temp
      let feeling = document.getElementById('feelings').value
      // let date = String(document.getElementById('date').value)
    //use fetch to to get route which will rewrite data
    fetch('add/'+ temp + '/'+feeling)
    .then((resp) => resp.json())
    .then(function(newData){
      console.log(newData)

      fetch('/all')
      .then((resp) => resp.json())
      .then(function(allData){
        console.log(allData)
        // HERE I THINK I WANT TO ADD THE VALUES FROM THE ROUTE TO POPULATE THE FINAL ENTRYs
        let tempHolder = document.getElementById('temp').innerHTML = Math.round(allData.temp)+ 'degrees';
        let contentHolder = document.getElementById('content').innerHTML = allData.feel
        // Get and set date
        let d = new Date();
        let NewDate = d.getMonth()+'/'+ d.getDate()+'/'+ d.getFullYear()
        document.getElementById("date").innerHTML = NewDate
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


