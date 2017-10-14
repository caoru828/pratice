/**
 * Created by Administrator on 2017/10/7 0007.
 */
$(function () {
    //#Tel获取焦点操作开始
    var telTextarea = $("#Tel");
    $(".addMessageBtn").on("click", function () {
        $(".message-first-page").css("display", "none");
        $("#message-add-message").css("display", "block");
    });
    telTextarea.focusin(function () {
        telTextarea.empty();
        telTextarea.css("color", "black");
    });
    telTextarea.focusout(function () {
        console.log(this);
        telTextarea.css({
            color: "#c1bbc3",
            fontSize: "11px"
        });
        telTextarea.html("输入示例：\n" + "18846466666\n" + "18846477777\n");
    });
    //获取焦点操作结束

    //短信充值根据条数获取金额开始
    $(".now-money-ul li:nth-child(1)")[0].nowMoney = 5;
    $(".now-money-ul li:nth-child(2)")[0].nowMoney = 9.99;
    $(".now-money-ul li:nth-child(3)")[0].nowMoney = 19.98;
    $(".now-money-ul li:nth-child(4)")[0].nowMoney = 29.94;
    $(".now-money-ul li:nth-child(5)")[0].nowMoney = 48.88;
    $(".now-money-ul li:nth-child(6)")[0].nowMoney = 97.77;
    $(".now-money-ul li:nth-child(7)")[0].nowMoney = 500;

    $(".now-money-ul li").on("click", function (e) {
        if ($(this).index() != 7) {
            $(".myself-decide").css("display","none");
            $("#now-money")[0].innerHTML = "";
            $("#now-money")[0].innerHTML = [this.nowMoney];
        }else{
            $("#now-money")[0].innerHTML = "0";

            $(".myself-decide").css("display","block");
            $(".myself-decide-input").keyup(function () {
                $(".tail-zero")[0].innerHTML = "";
                console.log(this.value);
                var trueMoney = this.value*0.9;
                if(isNaN(trueMoney)){
                    alert("输入错误，请重新输入！")
                }
                $("#now-money")[0].innerHTML = [trueMoney];
            })
        }
        $(this).siblings().css("border-color", " #e4e4e4");
        $(this).css("border-color", "#ea413c");

    });
    //信充值根据条数获取金额结束

//    短信记录右侧弹出框开始


//    短信记录右侧弹出框结束

});