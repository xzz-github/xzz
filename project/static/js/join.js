$(".layout2 .search_box ul li").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    }
);
$(".layout3 .com .com_top").click(function(){
    $(this).children(":last-child").toggleClass("active1");
    $(this).next().toggleClass("h0");
});
$(".layout2 .search_box ul li:first-child").click(function(){
    $(this).parent().parent().parent().parent().next() .children(":first-child").children().removeClass("active2");
});
$(".layout2 .search_box ul li:nth-child(2)").click(function(){
    var $zz=$(this).parent().parent().parent().parent().next() .children(":first-child");
    $zz.children().addClass("active2").parent().find(".yinxiao").removeClass("active2");

});
$(".layout2 .search_box ul li:nth-child(3)").click(function(){
    var $zz=$(this).parent().parent().parent().parent().next() .children(":first-child");
    $zz.children().addClass("active2").parent().find(".sc").removeClass("active2");
});
$(".layout2 .search_box ul li:nth-child(4)").click(function(){
    var $zz=$(this).parent().parent().parent().parent().next() .children(":first-child");
    $zz.children().addClass("active2").parent().find(".cp").removeClass("active2");
});
$(".layout2 .search_box ul li:nth-child(5)").click(function(){
    var $zz=$(this).parent().parent().parent().parent().next() .children(":first-child");
    $zz.children().addClass("active2").parent().find(".pt").removeClass("active2");
});
$(".layout2 .search_box ul li:nth-child(6)").click(function(){
    var $zz=$(this).parent().parent().parent().parent().next() .children(":first-child");
    $zz.children().addClass("active2").parent().find(".yw").removeClass("active2");
});
$(".layout2 .search_box ul li:nth-child(7)").click(function(){
    var $zz=$(this).parent().parent().parent().parent().next() .children(":first-child");
    $zz.children().addClass("active2").parent().find(".kf").removeClass("active2");
});

