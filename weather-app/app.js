const request = require("postman-request");
const {geoCode} = require('./utils/geocode')
const {forecast} = require('./utils/forecast')



//getWeather("Montevideo")
geoCode("Montevideo", (error,data)=>{
    if(error){
        return console.log(error)
    }
    console.log("---------geoCode-------------")
    console.log('Error', error)
    console.log('Data',  data) 
    forecast(data.latitude,data.longitude, (error,data)=>{
        if(error){
            return console.log(error)
        }
        console.log("---------forecast-------------")
        console.log('Error', error)
        console.log('Data', data)
    })
})
/*
forecast(40.7831,-73.9712, (error,data)=>{
    console.log("---------forecast-------------")
    console.log('Error', error)
    console.log('Data', data)
})
*/