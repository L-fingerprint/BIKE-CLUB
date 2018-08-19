var join =document.getElementById("join");
var sign =document.getElementById("sign");
function  signIn() {
    if(sign.style.display="none"){
        join.style.display="none";
        sign.style.display="block";
    }
}
//表单
function ifnull(txt){
    if(txt.length==0){
        return true;
    }
    var $reg=/\s+/;
    return $reg.test(txt);
}
$("#email").blur(function(){
    if(ifnull($(this).val())){
        $("#email_msg").html("邮箱不能为空");
    }else{
        var $reg=/^[a-zA-Z1-9]\w{1,}@[a-zA-Z1-9]{2,}(\.(com|cn|net)){1,2}$/;
        if(!$reg.test($("#email").val())){
            $("#email_msg").html("邮箱格式错误！");
        }else{
            $("#email_msg").html("").CSS("color","green");
        }
    }
});
$("#username").blur(function(){
    if(ifnull($(this).val())){
        $("#username_msg").html("用户名不能为空");
    }else{
        var $reg=/^\w{6,}$/;
        if(!$reg.test($("#username").val())){
            $("#username_msg").html("用户名至少要6位哦");
        }else{
            $("#username_msg").html("");
        }
    }
});
$("#password").blur(function(){
    if(ifnull($(this).val())){
        $("#password_msg").html("用户名不能为空");
    }else{
        var $reg=/^\w{6,}$/;
        if(!$reg.test($("#password").val())){
            $("#password_msg").html("密码至少要6位哦");
        }else{
            $("#password_msg").html("");
        }
    }
});
$("#repassword").blur(function(){
    if(ifnull($(this).val())){
        $("#repassword_msg").html("请确认密码");
    }else{
        if($("#password").val()!=$("#repassword").val()){
            $("#repassword_msg").html("两次密码不一致");
        }else{
            $("#repassword_msg").html("");
        }
    }
});

//验证表单
function checkForm(){
    if(ifnull($("#email").val())){
        $("#email_msg").html("邮箱不能为空！");
        return false;
    }else{
        var $reg=/^[a-zA-Z1-9]\w{1,}@[a-zA-Z1-9]{2,}(\.(com|cn|net)){1,2}$/;
        if(!$reg.test($("#email").val())){
            $("#email_msg").html("邮箱格式错误！");
            return false;
        }
    }
    if(ifnull($("#username").val())){
        $("#username_msg").html("用户名不能为空！");
        return false;
    }else{
        var $reg=/^\w{6,}$/;
        if(!$reg.test($("#username").val())){
            $("#username_msg").html("用户名至少6位");
            return false;
        }
    }
    if(ifnull($("#password").val())){
        $("#password_msg").html("密码不能为空");
        return false;
    }else{
        var $reg=/^\w{6,}$/;
        if(!$reg.test($("#password").val())){
            $("#password_msg").html("密码至少6位");
            return false;
        }
    }
    if(ifnull($("#repassword").val())){
        $("#repassword_msg").html("请确认密码");
        return false;
    }
    if($("#password").val()!=$("#repassword").val()){
        $("#repassword_msg").html("两次密码不一致");
        return false;
    }
    return true;
}
