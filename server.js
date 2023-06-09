const express = require('express')
const app = express()
const PORT = 3000

const rappers = {
    '21 savages':{
    'age': 29,
    'birthName': 'Shéyaa Bin Abraham-Joseph',
    'birthplace': 'London, England'
},
'chance the rapper':{
    'age': 29,
    'birthName': 'Chancelor Bennett',
    'birthplace': 'Chicago, Illinois '
},
'unknown':{
    'age': 0,
    'birthName': 'unknown',
    'birthplace': 'unknown '
}
}

app.get('/', (request, response) =>{
response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) =>{
    const rapperName = request.params.name.toLowerCase()
    if( rappers[rapperName] ) {
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Better go Catch it!`)
})