const {readFile} = require('fs')
var lista = []
readFile('./dataset/palavras.txt', 'utf8', (err, data)=>{
    let filtered = []
    array = data.toString().split("\n");
    for( i in array){
        if(!array[i].length == 5) filtered.push(array[i])
    }
})




// module.exports = lista


