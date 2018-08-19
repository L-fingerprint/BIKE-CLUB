var img= new Vue({
    el:'.img',
    data:{
        message:'页面加载于' + new Date().toLocaleString()
    }
});
$(function () {
    $('.sm').click(function () {
        $(this).toggleClass('sm');
        $('.search').css('display','none');
    });
    $('.bg').click(function () {
        $(this).toggleClass('bg');
        $('.search').css('display','none');
    })
});