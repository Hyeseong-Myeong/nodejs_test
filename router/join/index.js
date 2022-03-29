const { randomInt } = require('crypto');
const express = require('express');
const app = express();
const mysql = require('mysql');
const passport = require('passport');
const router = express.Router();
const path = require('path');
const LocalStrategy = require('passport-local').Strategy;
//config info separation
const config = require('../../config/config');

let connection = mysql.createConnection(config.databaseOptions);
//DB setting
// connection.connect();

//router
router.get('/',function(req, res){
    res.render('join.ejs');    
})

//passport-local strategy
passport.use('local-join', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passsReqToCallback: true
    }, function(req, email, password, done){
        console.log('local-join callback called');
    }
));

router.post('/', passport.authenticate('local-join', {
    successRedirect: '/main',
    failureRedirect: '/join',
    failureFlash: true
}))

// router.post('/', function(req, res){
//     let body = req.body;
//     let email = body.email;
//     let name = body.name;
//     let password = body.password;
//     let uid = body.uid;

//     let sql = {email: email, name : name, pw: password, uid : uid};
//     let query = connection.query('insert into user set ?', sql ,function(err, rows){
//         if(err) {throw err;}
//         else {
//             console.log("DB insert Done!");
//             res.render('welcome.ejs', {'name' : name, 'id': uid})
//         }
//     })
// })

module.exports = router;