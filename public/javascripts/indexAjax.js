// $(function () {
//     $('#next').click(function () {
//         var skip =0;
//         $.ajax({
//             type:'post',
//             url:'/bikeIndex/postAjax',
//             data:{
//              skip:skip+3
//             },
//             success:function (data) {
//                 var showHtml ="";
//                 for(var o of data) {
//                         showHtml += "<div class='picture'><div class='image'><img src='"+o.image+"' alt=\"\"></div>";
//                         showHtml += "<h3>"+o.title+"</h3>";
//                         showHtml += "<p>"+o.description+"</p></div>";
//                 }
//                 $('#nextPage').append(showHtml);
//                 console.log(data)
//             },
//             error:function (error) {
//                 console.log(error)
//             }
//         });
//     });
//     // skip += 3;
// });
$(function(){
    var skip = 0;
    var range = 50;             //距下边界长度/单位px
    var elemt = 500;           //插入元素高度/单位px
    var maxnum = 10;            //设置加载最多次数
    var num = 1;
    var totalheight = 0;
    var main = $(".contain");//主体元素

    $(window).scroll(function(){
        var srollPos = $(window).scrollTop();    //滚动条距顶部距离(页面超出窗口的高度)
        totalheight = parseFloat($(window).height()) + parseFloat(srollPos);
        if(($(document).height()-range) <= totalheight  && num != maxnum) {
            var showHtml = "";
            $.ajax({
                type:"post", //http的请求类型
                url:"/bikeIndex/postAjax", //请求地址
                data:{
                    skip:skip,
                }, //传输给服务器的数据，是一个对象
                success: function(data){
                    console.log(data);
                    if(data != null){
                        for(var o of data){
                            showHtml += "<div class='picture'><div class='image'><img src='"+o.image+"' alt=\"\"></div>";
                            showHtml += "<h3>"+o.title+"</h3>";
                            showHtml += "<p>"+o.description+"</p></div>";
                        }
                        $('#nextPage').append(showHtml);
                        num++;
                        skip += 2;
                    }
                },
                error:function(error){
                    console.log(error);
                }
            });
        }
    });
});
