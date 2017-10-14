/**
 * Created by Administrator on 2017/8/23 0023.
 */
$(function () {
    var oColor = document.getElementsByClassName("a-color");
    $("#header-nav-Sicon").get(0).addEventListener("click", function () {
        //console.log($("#header-nav-Sicon").find(".About-me"));
        $(".head").find(".toggle").css("display", "block").animate({
            width: 230,
            zIndex:889
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
    },1000);

    //回到顶部开始
    $("#arrowTop").on("click", function () {
        var target = document.body.scrollTop ? $("body") : $("html");
        var timer = setInterval(function () {
            var iScrolltop = target.scrollTop();
            if (iScrolltop <= 0) {
                clearInterval(timer);
            } else {
                target.scrollTop(iScrolltop -= 900);
            }
        }, 100)
    });
    //回到顶部结束

     //滚动条滚动，触发头的标题栏以及回到顶部的箭头
     window.onscroll = function () {
    var target = document.body.scrollTop ? $("body") : $("html");
    console.log(target.scrollTop());
    if (target.scrollTop() >= 370) {
        $("#header-nav").css({
            background: "#fff",
            height: 66,
            boxShadow:"0"+" 2px"+" 10px"+" -1px"+" rgba(87, 97, 100, 0.35)"
        }).children().css("height", "66").children().css("height", "66").hover(function () {
            $(".About-me  li").css({
                background: "transparent",
                overflow: "hidden"
            }).children().css("color", "black");
            $(this).css({
                transition: "all" + " 0.5s" + " linear",
                background: "#1692b4",
                height: "66",
                opacity: "1"
            }).children().css("color", "white");
        }, function () {
            $(".About-me  li").css({
                background: "transparent",
                overflow: "hidden",
                height: "66"
            }).children().css({
                height: "66",
                color: "black",
                fondWeight: "bolder"
            });
        }).children().css({
            height: "66",
            color: "black",
            fondWeight: "bolder"
        });
        $("#img1").css("display","none");
        $("#img2").css("display","block");
        $(".head").find(".toggle").css("display", "none");
    } else {

        $("#header-nav").css(
            {
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                height: 79
            }).children().css({
                height: "79",
                background: "transparent"
            }).children().css({
                background: "transparent",
                height: "79"
            }).hover(function () {
                $(".About-me  a").css("color", "white");
                $(this).css({
                    background: "#1391a6",
                    height: "79"
                }).children();
            }, function () {
                $(".About-me  li").css({
                    background: "transparent",
                    height: "79",
                    overflow: "hidden"
                }).children().css({
                    height: "79",
                    color: "white"
                });
            }).children().css("color", "white");
        $("#img1").css("display","block");
        $("#img2").css("display","none");

    }
    if (target.scrollTop() >= 600) {
        $("#arrowTop").css("display", "block");

    } else {
        $("#arrowTop").css("display", "none")
    }
};
     //滚动条结束

     // my-story鼠标事件开始
     $("#ME-title h2").hover(function(){
         //$(this).css({ borderColor: "#1692a7"});
         $(this).stop().animate({
            borderWidth:3,
             borderRadius:10
         },100);
     },function(){
         $(this).stop().animate({
             borderWidth:0
         },100);
     });

     // my-story鼠标事件结束

     //my-honor开始
    $(".honor-content").hover(function(){
       $(this).css("border-color","#1391a6")
    },function(){
        $(".honor-content").css("border-color","#b5b5b5")
    });

     //my-honor结束

//small-effect开始

    var oContainer = document.getElementById("watch-container");
    var oul = document.getElementById("ul");
    var oHour = document.getElementById("hour");
    var oMinute = document.getElementById("minute");
    var oSecond = document.getElementById("second");
    var aLi = "";
    for (var i = 0; i < 60; i++) {
        console.log(i);
        aLi += "<li style='transform: rotate(" + i * 6 + "deg)'></li>"
    }
    oul.innerHTML = aLi;


    run();
    function run() {
        var date = new Date();
        var second = date.getSeconds();
        var minute = date.getMinutes() + second / 60;
        var hour = date.getHours() + minute / 60;
        oSecond.style.transform = "rotate(" + second * 6 + "deg)";
        oMinute.style.transform = "rotate(" + minute * 6 + "deg)";
        oHour.style.transform = "rotate(" + 30 * hour + "deg)";
    }
    var timer = setInterval(function () {
        run();
    }, 1000);
    var num=1;
    oContainer.onmouseover = function () {

//            this.style.transform  =  "rotateY("+num*360+"deg)";
        var type = choose();
        this.style.animation = type+" 1s ";
        function choose(){
            var random = parseInt(Math.random()*10);
            console.log(random);
            switch (random){
                case 0:
                    return "zoomIn";
                    break;
                case 1:
                    return "flipInX";
                    break;
                case 2:
                    return "animate";
                    break;
                case 3:
                    return "shake";
                    break;
                case 4:
                    return "tada";
                    break;
                case 5:
                    return "wobble";
                    break;
                case 6:
                    return "jello";
                    break;
                case 7:
                    return "bounceIn";
                    break;
                case 8:
                    return "lightSpeedOut";
                    break;
                case 9:
                    return "fadeOutRightBig";
                    break;
                case 10:
                    return "bounceOutUp";
                    break;
                default :return"swing"  ;
            }
        }
        num++;
    }

//  small-effect  结束
});
