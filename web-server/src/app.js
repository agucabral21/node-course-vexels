const path = require('path')
const express = require('express')

const app = express()

//Paths
const publicDirectoryPath =  path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates')

//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

//Directorio estatico
app.use(express.static(publicDirectoryPath))

app.get('', (req,res) => {
    res.render('index',{
        title:'Main Page',
        name:'Name value'
    })
})

app.get('/about', (req,res) => {
    res.render('about',{
        title:'About me',
        name:'About Name'
    })
})

app.get('/help', (req,res) => {
    res.render('help',{
        title:'Help',
        name:'Name',
        message:'Este es el mensaje'
    })
})
/*
app.get('/help', (req,res) => {
    res.send("<h1>Help Page</h1>")
})
app.get('/about', (req,res) => {
    res.send("<h1>Help Page</h1>")
})*/
app.get('/weather', (req,res) => {
    res.send({location:"Montevideo", weather:"Cool"})
})

app.listen(3000, () => {

    console.log('Server is up on port 3000.')

})