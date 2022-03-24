const { randomInt } = require('crypto');
const express = require('express');
const app = express();
const mysql = require('mysql');
const router = express.Router();
const path = require('path');
//config info separation
const config = require('../../config/config');

var connection = mysql.createConnection(config.databaseOptions);

// //DB setting
// let connection = mysql.createConnection({
//     host:'localhost',
//     port: 3306,
//     user: 'root',
//     //git commit 전 수정 필수
//     database: 'nodejs_prtc'
// });
// connection.connect();

//router
router.get('/',function(req, res){
    res.sendFile(path.join(__dirname, '../../public/join.html'));
})

router.post('/', function(req, res){
    let body = req.body;
    let email = body.email;
    let name = body.name;
    let password = body.password;
    let uid = body.uid;

    let query = connection.query('insert into user (email,name,pw,uid) values ("' + email + '","' + name + '","' + password + '","' + uid + '")',function(err, rows){
        if(err) {throw err;}
        else console.log("DB insert Done!");
    })
})

module.exports = router;