var mydate= new Date().toLocaleDateString();
$('#date').html(mydate);
var num = parseInt($('#add-num').html());
console.log(num);
$('.praise').click(function () {
    if ($('.praise').css("color", "#999999")) {
        $('.praise').css("color", "red");
        num++;
        console.log(num);
        $("#add-num").html(num + " likes");
        $('#add').css("display", "block");
    }
});