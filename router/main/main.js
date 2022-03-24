const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

//main url route
router.get('/main', function(req, res){
    res.sendFile(path.join(__dirname + '../public/main.html'));
})

module.exports = router;