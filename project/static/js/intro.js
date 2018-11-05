function aaa() {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    if (t > 280) {
        $(".layout2 .center>div").addClass("scroll-ball");
    }
    if (t > 1000) {
        $(".layout3 .center .scroll-i").addClass("scroll-ball");
    }
    if (t > 1800) {
        $(".layout4 .center .scroll-i").addClass("scroll-ball");
    }
    if (t > 2700) {
        $(".layout5 .center .scroll-i").addClass("scroll-ball");
    }
    if (t > 3600) {
        $(".layout6 .center .scroll-i").addClass("scroll-ball");
    }
};
function diploma_left(){
    var diplomaLeft=document.getElementById("diploma_left");
    var diplomaRight=document.getElementById("diploma_right");
    diplomaLeft.style.backgroundColor="#a78953";
    diploma.style.transform="translateX(0px )";
    diplomaRight.style.backgroundColor="#0D1A27";
}
function diploma_right(){
    var diplomaLeft=document.getElementById("diploma_left");
    var diplomaRight=document.getElementById("diploma_right");
    diplomaLeft.style.backgroundColor="#0D1A27";
    diploma.style.transform="translateX(-1200px )";
    diplomaRight.style.backgroundColor="#a78953";
}
