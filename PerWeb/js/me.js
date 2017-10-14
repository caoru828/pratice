$(function () {
    var nowIndex = 0;
    var timer;

    function change() {
        $('#nav li').eq(nowIndex).addClass("selected").siblings().removeClass("selected");
        $("#img img").eq(nowIndex).addClass("selected").siblings().removeClass("selected");
    }

    $('#nav li').on("mouseover", function () {
        nowIndex = $(this).index();
        change();
    });
    $("#arrow div").on("click", function () {
        if ($(this).attr("id") == "left") {
            nowIndex--;
            if (nowIndex == -1) {
                nowIndex = $("#nav li").length - 1;

            }
        } else {
            nowIndex++;
            //这是nav下的li，长度是4，如果是nav长度是1
            if (nowIndex == $("#nav li").length ) {
                nowIndex = 0;
            }
        }
        change();
    });
    function  play(){
        timer = setInterval(function(){
            $("#arrow #right").trigger("click");
        },1000);
    }
    $("#container").hover(function(){
        clearInterval(timer);
    },function(){
        play();
    });
    play();
});