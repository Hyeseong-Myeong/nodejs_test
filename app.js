const express = require('express')
const app = express()
const bodyParser = require('body-parser');

//start server
app.listen(3000, function(){
    console.log("app start on port 3000"); 
})

//static directory
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine', 'ejs');


//url routing
app.get('/', function(req, res){
    res.sendFile(__dirname + "/public/main.html");
})

//main url route
app.get('/main', function(req, res){
    res.sendFile(__dirname + "/public/main.html");
})

app.post('/email_post',function(req, res){
    //get : req.param('email')
    //let hello = `<h1>welcome! ${req.body.email}</h1>`;
    //res.send(hello);
    res.render('email.ejs', {'email' : req.body.email});
})