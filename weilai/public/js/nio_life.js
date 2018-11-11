$(".item-id-11 .item_image>div>div").mouseenter(function(){
    var i=$(this).children(":last-child")[0].id;
    var c3 = document.getElementsByClassName("c3")[i];
    var ctx = c3.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = "#fff";
    ctx.lineWidth=2;
    ctx.arc(33, 33, 32, 1 * Math.PI, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(17, 33);
    ctx.lineTo(49, 33);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(33, 17);
    ctx.lineTo(33, 49);
    ctx.stroke();
});
$(".item-id-11 .item_image .canvas-rect").mouseenter(function(){
    var i=this.id;
    var c3 = document.getElementsByClassName("c3")[i];
        var ctx = c3.getContext("2d");
        ctx.beginPath();
        ctx.strokeStyle = "#fff";
        ctx.lineWidth=2;
        ctx.arc(33, 33, 32, 1 * Math.PI, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(17, 33);
        ctx.lineTo(49, 33);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(33, 17);
        ctx.lineTo(33, 49);
        ctx.stroke();
        function startcircle() {
            function circle(a, b) {
                ctx.beginPath();
                ctx.strokeStyle = "#fff";
                ctx.lineWidth=2;
                ctx.arc(33, 33, 32, a * Math.PI, b * Math.PI);
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(17, 33);
                ctx.lineTo(49, 33);
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(33, 17);
                ctx.lineTo(33, 49);
                ctx.stroke();
            }
            var a = 1, b = 2;
            var t = setInterval(() => {
                ctx.clearRect(0, 0, 66, 66);
                a += 0.01;
                b += 0.018;
                circle(a, b)
                if (b - a > 2) {
                    console.log(a, b);
                    clearInterval(t)
                }
            }, 2)
        }
        function endcircle() {
            function circle(a, b) {
                ctx.beginPath();
                ctx.strokeStyle = "#fff";
                ctx.arc(33, 33, 32, a * Math.PI, b * Math.PI);
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(17, 33);
                ctx.lineTo(49, 33);
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(33, 17);
                ctx.lineTo(33, 49);
                ctx.stroke();
            }
            var a = 2.26, b = 4.27;
            var t = setInterval(() => {
                ctx.clearRect(0, 0, 66, 66);
                a -= 0.01;
                b -= 0.018;
                circle(a, b)
                if (a < 1.01) {
                    console.log(a, b);
                    clearInterval(t)
                }
            }, 2)

        }
        c3.onmouseenter = startcircle;
        c3.onmouseleave = endcircle;
});
$(".item-id-11 .item_image>div>div").mouseenter(function(){
   $(this).children(":last-child").addClass("active");
});
$(".item-id-11 .item_image>div>div .canvas-rect").mouseenter(function(){
    $(this).children(":last-child").addClass("active");
});
$(".item-id-11 .item_image>div>div").mouseleave(function(){
    $(this).children(":last-child").removeClass("active");
});
$(".item-id-11 .item_image>div>div").mouseover(function(){
    $(this).children(":first-child").addClass("tr_img");
})
$(".item-id-11 .item_image>div>div").mouseout(function(){
    $(this).children(":first-child").removeClass("tr_img");
})
function aaa() {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    if(t>200){
        $(".item-id-2 .item_text p").addClass("text-t")
        $(".item-id-2 .item_text p:nth-child(2)").addClass("text-t2")
        $(".item-id-2 .item_text p:nth-child(3)").addClass("text-t3")
        $(".item-id-2 .item_text p:nth-child(4)").addClass("text-t4")
    }
    if(t>1100){
        $(".item-id-4 .item_text .item-id-d").addClass("item-id-4-d1")
    }
    if(t>1300){
        $(".item-id-5 .cell .cell_long").addClass("cell_long1")
        $(".item-id-5 .cell .c1 img:nth-child(1)").addClass("animate1")
        $(".item-id-5 .cell .c1 img:nth-child(2)").addClass("animate3")
        $(".item-id-5 .cell .c2 img:nth-child(1)").addClass("animate2")
        $(".item-id-5 .cell .c2 img:nth-child(2)").addClass("animate4")
    }
    if (t > 2300) {
        $(".item-id-6 .hero_inner .item-id-6-text").addClass("opa");
    }
    if (t > 3000) {
        $(".item-id-7 .hero_inner .item-id-7-text").addClass("opa");
    }
    if(t>3500){
        $(".item-id-8 .item_text p").addClass("text-t")
        $(".item-id-8 .item_text p:nth-child(2)").addClass("text-t2")
    }
    if(t>4200){
        $(".item-id-10 .item_text .item-id-d").addClass("item-id-4-d1")
    }
    if(t>5800){
        $(".item-id-13 .container .related-news_title").addClass("new")
    }

}