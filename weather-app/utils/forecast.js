const request = require("postman-request");

const weatherStackId = "26f9062cfe2cfef5f6518440fc70515d"

const forecast = (latitude, longitude, callback) =>{

    const url = 'http://api.weatherstack.com/current?access_key='+weatherStackId+'&query='+latitude+','+longitude;
   
    //llamo api que me devuelve clima
    request({url:url, json:true}, (error,response) => {    
        //low level error
        if(error){
            callback('Unable to connect to service',undefined)
         //external server message error
         }else if(response.body.error){
             callback(response.body.error,undefined)
         }else if(response.body.current === 0){
             callback("Unable to find location",undefined)
         }else{
             callback(undefined, {
                temperature: response.body.current.temperature,
                name: response.body.location.region, 
                feels:response.body.current.feelslike,
                humidity: response.body.current.humidity,
                description: response.body.current.weather_descriptions[0]
             })           
         } 
    });
   
}



module.exports = {forecast:forecast}