$(".layout2 .btn ul li ").click(function(){
    $(this).addClass('active').siblings().removeClass('active');
});
$(".layout2 .btn ul li a").click(function(){
    var i=this.className;
    var divs=$(".layout2 .cont>div");
    for(var div of divs){
        $("div").removeClass("active1");
    }
    $(divs[i]).addClass("active1");
});
$(".foot_bullet .foot_bullet_btns div").click(function(){
    $(this).addClass('active').siblings().removeClass('active');
});
$("#title_b1").click(function(){
    var btn=$(".title_cp .title_cp_w")[0];
    btn.style.transform="translateX(0px)";
    btn.style.transition="all 0.5s"
});
$("#title_b2").click(function(){
    var btn=$(".title_cp .title_cp_w")[0];
    btn.style.transform="translateX(-1200px)";
    btn.style.transition="all 0.5s"
});



