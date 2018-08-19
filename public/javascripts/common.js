//汉堡按钮
$(document).ready(function() {
    $(".nav_login").click(function() {
        $(".stick").toggleClass(function() {
            return $(this).is('.open, .close') ? 'open close' : 'open';
        });
    });
});
//菜单栏
$(function() {
    $('.nav_login').click(function () {
        $('.menu').toggleClass('sty');
    })
});
window.onload = function () {
    var scroll_top = 0, begin = 0, end = 0, timer = null;//  变量
    window.onscroll = function () { // 监听窗口的滚动
        scroll_top = scroll().top;  // 获取滚动的高度
        scroll_top > 0 ? show(s('top')) : hide(s('top')); // 显示和隐藏
        begin = scroll_top;
    };
    s("top").onclick = function () { // 监听点击
        clearInterval(timer); // 清除定时器
        timer = setInterval(function () { //开启缓动动画
            begin = begin + (end - begin) / 20;
            window.scrollTo(0, begin);
            console.log(begin, end);    //清除定时器
            if(Math.round(begin) === end){
                clearInterval(timer);
            }
        }, 20);
    }
};
function scroll() {
    if(window.pageYOffset !== null){
        return {
            top: window.pageYOffset,
            left: window.pageXOffset
        }
    }else if(document.compatMode === "CSS1Compat"){ // W3C
        return {
            top: document.documentElement.scrollTop,
            left: document.documentElement.scrollLeft
        }
    }
    return {
        top: document.body.scrollTop,
        left: document.body.scrollLeft
    }
}
function  s(id){
    return typeof id === "string" ? document.getElementById(id) : null;
}
function show(obj) {
    return obj.style.display = 'block';
}
function hide(obj) {
    return obj.style.display = '';
}