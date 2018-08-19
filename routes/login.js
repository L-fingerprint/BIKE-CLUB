var express = require('express');
var router = express.Router();
var logindb = require('../models/logindb');
module.exports = router;
router.get('/',function (req,res,next) {
    res.render('login',{isRegister : req.query.isRegister});
});
router.post('/',function (req,res) {
    logindb.findOne({
        "name":req.body.name,
        "email":req.body.name,
        "psd":req.body.psd
    },function (err, result) {
        if(result == undefined){
            req.flash('error','用户名或者密码错误');
            res.render('login',{isRegister: 0});
            // return res.redirect('/login');
        }else {
            // res.redirect("/bikeIndex/"+result.name);
            // req.flash('info','登入成功');
            return res.redirect('/bikeIndex');
        }
    })

});
