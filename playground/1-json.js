const fs = require('fs');



const objeto = 
{
    name:'nombre',
    apellido:'apellido',
    numero:2
}

var string = JSON.stringify(objeto)
var json = JSON.parse(string)


console.log(string)
console.log(json)