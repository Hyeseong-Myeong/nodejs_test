const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const router = require('./router/index');


//start server
app.listen(3000, function(){
    console.log("app start on port 3000"); 
})

//static directory
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine', 'ejs');

//router module
app.use(router);