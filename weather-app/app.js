const request = require("postman-request");
const {geoCode} = require('./utils/geocode')
const {forecast} = require('./utils/forecast')
const chalk = require('chalk');


//getWeather("Montevideo")
geoCode("Montevideo", (error,{longitude,latitude,location} = {}) => {
    if(error){
        return console.log(error)
    }
    console.log(chalk.bgGreen.black("---------geoCode-------------"))
    console.log('Error', error)
    console.log('Data',  longitude,latitude,location) 
    forecast(latitude,longitude, (error,data)=>{
        if(error){
            return console.log(error)
        }
        console.log(chalk.bgGreen.black("---------forecast-------------"))
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