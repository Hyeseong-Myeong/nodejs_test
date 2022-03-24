const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

const main = require('./main/main');
const email = require('./email/email');

//url routing
router.get('/', function(req, res){
    res.sendFile(path.join(__dirname ,"../public/main.html"));
})

router.use('/main', main);
router.use('/email', email);

module.exports = router;