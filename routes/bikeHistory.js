var express = require('express');
var router = express.Router();
var bike =require('../models/bikeHistory');

/* GET users listing. */
router.get('/', function(req, res, next) {
    bike.findAll(function (err,image) {
        console.log(image);
        res.render('history',{image:image});
    });
});

module.exports = router;