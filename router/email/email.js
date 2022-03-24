const express = require('express');
const app = express();
const mysql = require('mysql');
const router = express.Router();
const path = require('path');
var config = require('../../config/config');
//db config info separation
var connection = mysql.createConnection(config.databaseOptions);

//router
router.post('/form',function(req, res){
    //get : req.param('email')
    //let hello = `<h1>welcome! ${req.body.email}</h1>`;
    //res.send(hello);
    res.render('email.ejs', {'email' : req.body.email});
})

router.post('/ajax', function(req,res){
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

module.exports = router;