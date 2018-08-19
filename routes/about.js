var express = require('express');
var router = express.Router();
var about =require('../models/about');
router.get('/', function(req, res, next) {
    about.findAll(function (err,image) {
                var picture= [];
                for (var i of image) {
                    if(i.type == "1"){
                      picture.push(i);
                    }
                }
                res.render('about',{image:image.slice(0,3),picture:picture.slice(0,3)});
            });
        });
module.exports = router;