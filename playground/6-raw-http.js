const http = require('http')

const weatherStackId = "26f9062cfe2cfef5f6518440fc70515d"

const url = 'http://api.weatherstack.com/current?access_key='+weatherStackId+'&query='+40+','+73;


const request = http.request(url,(response) =>{
    let data = ''

    response.on('data',(chunk) =>{
        data =  data + chunk.toString()

        
    })

    response.on('end',() =>{
        const body = JSON.parse(data)
        console.log(body);

    })

    console.log(response);
})

request.on('error', (error) => {
    console.log('Error!!', error)
})

request.end()