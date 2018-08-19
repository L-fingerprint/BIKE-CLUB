var express = require('express');
var router = express.Router();
var bike =require('../models/bike');

/* GET users listing. */
router.get('/', function(req, res, next) {
    bike.findAll(function (err,image) {
        res.render('bikeIndex',{image:image.slice(0,6)});
    });
});
router.post('/postAjax',function(req,res){
    if(global.isFlag != 1){
        global.isFlag = 1;
        bike.findPage(req.body.skip,function(err,result){
            if(err) return result.json(err);
            global.isFlag = 0;
            return res.json(result);
        });
    }else{
        return res.json(null);
    }
});


module.exports = router;