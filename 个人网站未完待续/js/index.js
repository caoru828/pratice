/**
 * Created by Administrator on 2017/8/23 0023.
 */
$(function () {
    var oColor = document.getElementsByClassName("a-color");
    //console.log($("#wrapper-span"));
    $("#wrapper-span").get(0).addEventListener("click", function () {
        //console.log($("#header-nav-Sicon").find(".About-me"));
        $(".head").find(".toggle").css("display", "block").animate({
            width: 230
        }, 500)
    });
    $("#particles-js").get(0).addEventListener("click", function () {
        $(".head").find(".toggle").animate({
            width: 0
        }, 500, "swing", function () {
            $(".head").find(".toggle").css("display", "none");
        });

    });
    $("#header-nav").on("click", function (e) {
        if (e.target == this) {
            $(".head").find(".toggle").animate({
                width: 0
            }, 500, "swing", function () {
                $(".head").find(".toggle").css("display", "none");
            });
        }
    });

    //var timer = setInterval(function(){
    //    $("#My-name").fadeToggle();
    //},1000);
    var $mymane = $(".My-name");
    //var $address = $("#address");
    //var timer = setInterval(function () {
    var timer = setInterval(function () {
        var i = 0;
        //$address.css("display", "none");
        var timer1 = setInterval(function () {
            $mymane.css("display", "inline-block");
            $mymane.animate({
                width: 387
                //}, 1000
                //);
                //if($mymane[0].style.display == "none"){
                //clearInterval(timer1);
                //}

            }, 1000, function () {
                $mymane.animate({
                    width: 0
                }, 1000)

            });

        }, 2000);
//
//if(i==1||i%2!=0){
//    i=i+1;
//
//}else{
//    $mymane.empty().html(" I AM CAO RU!");
//    i=i+1;
//
//}


        //$('<span class="My-name">I LIVE IN HEILONGJIANG! </span>').replaceAll(".My-name");
        //$mymane.css("display", "none");
        //var timer2=setInterval(function(){
        //    $address.css("display", "block");
        //    $address.animate({
        //        width: 386
        //    }, 1000, "swing", function () {
        //        $address.animate({
        //            width: 0
        //        }, 1000)
        //    });
        //    $address.css("display", "none");

        //},2000);
        //clearInterval(timer2);
        //$address.css("display", "none");
    }, 2000);


    $("#arrowTop").on("click", function () {
        var target = document.body.scrollTop ? $("body") : $("html");
        var timer = setInterval(function () {
            var iScrolltop = target.scrollTop();
            if (iScrolltop <= 0) {
                clearInterval(timer);
            } else {
                target.scrollTop(iScrolltop -= 50);
            }
        }, 100)
    });


});
//滚动条滚动，触发头的标题栏以及回到顶部的箭头
window.onscroll = function () {

    var target = document.body.scrollTop ? $("body") : $("html");
    console.log(target.scrollTop());
    if (target.scrollTop() >= 370) {
        $("#header-nav").css({
            background: "#bdbdbd",
            height: 66
        }).children().css("height", "66").children().hover(function (e) {

            $(".About-me  li").css({
                background: "transparent",
                overflow: "hidden"
            });
            $(".About-me  a").css("color", "black");
            $(this).children().css("color", "white");
            $(this).css({
                background: "#1692b4",
                height: "66",
                opacity: "1"
            });
        }, function () {
            $(".About-me  a").css("color", "black");
            $(".About-me  li").css({
                background: "transparent",
                overflow: "hidden",
                height: "66"
            });
        }).children().css({
                height: "66",
                color: "black",
                fondWeight: "bolder"
            }
        );
        //$(".About-me  li").css("height", "66")
    } else {
        $(".About-me  li").css( "background", "transparent")
        $("#header-nav").css(
            {
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                height: 79
            }).children().css("height", "79").children().css({
                height: "79"

            }).hover(function () {
                $(".About-me  a").css("color", "#b9b9bf");
                $(this).css({
                    background: "#312753",
                    opacity: "0.7",
                    height: "79"
                });
            }, function () {
                $(".About-me  a").css("color", "#b9b9bf");
                $(".About-me  li").css({
                    background: "transparent",
                    overflow: "hidden"
                });
            }).children().css({
                height: "79",
                color: "#b9b9bf"
            });
        $("#slide-Menu li a").css("color", "#b9b9bf");
    }
    if (target.scrollTop() >= 600) {
        $("#arrowTop").css("display", "block")
    } else {
        $("#arrowTop").css("display", "none")
    }
};
//滚动条结束
