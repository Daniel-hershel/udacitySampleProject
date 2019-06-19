

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

  // postData('/add', {answer:42})
  // postData('/addMovie', {movie:' the matrix', score: 5})


  /* WEB API WITH FETCH DEMO-- @dsb need to rewrite code for animal API example */
let baseURL = 'http://api.animalinfo.org/data/?animal='
let apiKey = '&appid=9f15e45060...';

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
const newAnimal =  document.getElementById('animal').value;
getAnimalDemo(baseURL,newAnimal, apiKey)

}
const getAnimalDemo = async (baseURL, animal, key)=>{

  const res = await fetch(baseURL+animal+key)
  try {

    const data = await res.json();
    console.log(data)
    postData('/addAnimal', data)
    // return data;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}

/* CHAINED PROMISES TO GET AND POST DATA */

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
const newAnimal =  document.getElementById('animal').value;
const favFact =  document.getElementById('favorite').value;

getAnimal('/animalData',)
// New Syntax!
.then(function(data){
  // Add data
  console.log(data)
  postData('/addAnimal', {animal:data.animal, fact: data.fact, fav:favFact} )
})
.then(
  updateUI()
)

}

const updateUI = async () => {
  const request = await fetch('/all');
  try{
    const allData = await request.json()
    console.log(allData)
  document.getElementById('animalName').innerHTML = allData[0].animal;
  document.getElementById('animalFact').innerHTML = allData[0].facts;
  document.getElementById('animalFav').innerHTML = allData[0].fav;

  }catch(error){
    console.log("error", error)
  }
}
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
/* UPDATE UI DEMO */
// Call our getAnimal function then
// then update DOM with info


