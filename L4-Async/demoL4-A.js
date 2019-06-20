
/* CHAINED PROMISES TO GET AND POST DATA */

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
// Select the actual value of an HTML input to include in POST
const fav =  document.getElementById('fav').value;

// Faking an API call
getAnimal('/fakeAnimalData')
// New Syntax!
.then(function(data){
    console.log(data)
    // Add data to POST request
  postData('/addAnimal', {animal:data.animal, fact: data.fact, fav:fav} );
});
};

const getAnimal = async (url) =>{
    const res = await fetch(url);
    try {
  
      const data = await res.json();
      console.log(data)
      return data;
    }  catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
  
  }

/* POST EXAMPLE */
const postData = async ( url = '', data = {})=>{
    // console.log(data)
      const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });
  
      try {
        const newData = await response.json();
        console.log(newData);
        return newData
      }catch(error) {
      console.log("error", error);
      // appropriately handle the error
      }
  }

  // postData('/addMovie', {movie:' the matrix', score: 5})









