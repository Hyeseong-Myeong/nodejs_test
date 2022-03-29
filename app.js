const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const router = require('./router/index');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const flash = require('connect-flash');

//start server
app.listen(3000, function(){
    console.log("app start on port 3000"); 
})

//static directory
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

app.set('view engine', 'ejs');

//router module
app.use(router);