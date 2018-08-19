var express = require('express');
var router = express.Router();
var register = require('../models/registerdb');

router.post('/',function (req, res) {
    register.insertOne({
        "name":req.body.name,
        "email":req.body.name,
        "psd":req.body.psd,
    },function (err, result) {
        if(result == undefined){
            // req.flash('error','用户名不存在或者密码错误');
            return res.redirect('/login?isRegister=' + 1);
        }else {
            // req.flash('info','登入成功');
            return res.redirect('/bikeIndex');
        }
    });
});

module.exports = router;