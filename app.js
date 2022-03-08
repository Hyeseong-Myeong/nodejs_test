const express = require('express')


const app = express()

//start server
app.listen(3000, function(){
    console.log("app start on port 3000");
})

//static directory
app.use(express.static('public'))

//url routing
app.get('/', function(req, res){
    res.sendFile(__dirname + "/public/main.html");
})