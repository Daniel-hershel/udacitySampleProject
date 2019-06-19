// DEMO FOR LESSON 3- Requests and Routes 
app.post('/add', function(request, response){
    // let data = request.body;
    let newData = {animal:"turtle", score:7}
    let newEntry = {
        animal: newData.animal,
        score: newData.score
    }    
    data.push(newEntry)
    // console.log(data)
})
const data = [{animal:"elephant", score: 10},{animal:"kangaroo",score:3}]

function makeData(request){
    let newData = request.body;
    let newEntry = {
        animal: newData.animal,
        score: newData.score
    }    
    data.push(newEntry)
    console.log(data)
}

makeData({body:{animal:"turtle", score:7}})
console.log(data)