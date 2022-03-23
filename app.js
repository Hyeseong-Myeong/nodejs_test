const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    port: 3306,
    user: 'root',
    password: '_input_your_password_',
    database: 'nodejs_prtc'
});
connection.connect();

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

app.post('/ajax_send_email', function(req,res){
    console.log(req.body.email);
    //check validation about input -> select db
    let email = req.body.email;
    let responseData = {};

    let query = connection.query('select name from user where email="' + email + '"', function(err, rows){
        if(err) throw err;
        if(rows[0]){
            responseData.result = "ok";
            responseData.name = rows[0].name;
        }else {
            responseData.result = "none";
            responseData.name = "";        
        }
        res.json(responseData);
    })
})