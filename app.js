const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const main = require('./router/main');
const email = require('./router/email');

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
app.use('/main', main);
app.use('/email', email);
//url routing
app.get('/', function(req, res){
    res.sendFile(__dirname + "/public/main.html");
})


