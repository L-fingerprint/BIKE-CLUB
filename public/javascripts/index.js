var curIndex = 0;
var autoChange = setInterval(function(){
     if(curIndex <  $(".wordList li").length-1){
        curIndex ++;
    }else{
        curIndex = 0;
    }
    //调用变换处理函数
    changeTo(curIndex);
},2500);
function changeTo(num){
    $(".wordList").find("li").removeClass("onWord").hide().eq(num).fadeIn().addClass("onWord");
}
$(".wordList").find("li").each(function(item){
    $(this).hover(function(){
        clearInterval(autoChange);
        changeTo(item);
        curIndex = item;
    },function(){
        autoChange = setInterval(function(){
            if(curIndex <  $(".wordList li").length-1){
                curIndex ++;
            }else{
                curIndex = 0;
            }
            //调用变换处理函数
            changeTo(curIndex);
        },2500);
    });
});
// $(document).ready(function() {
//     $(".nav_login").click(function() {
//         $(".stick").toggleClass(function() {
//             return $(this).is('.open, .close') ? 'open close' : 'open';
//         });
//     });
// });
// $(function() {
//     $('.nav_login').click(function () {
//         $('.menu').toggleClass('sty');
//     })
// });