function nav_top1(){
    nav_more.style.transform="translateY(350px)";
    nav_more.style.opacity=1;
}
function nav_top2(){
    nav_more.style.transform="translateY(0px)";
}
function title_btn1(){
    title_b1.style.backgroundColor="#55c916";
    news.style.transform="translateX(0px )"
    title_b2.style.backgroundColor="#d7d7d7";
}
function title_btn2(){
    title_b2.style.backgroundColor="#55c916";
    news.style.transform="translateX(-1200px )";
    title_b1.style.backgroundColor="#d7d7d7";
}
function img11(){
    opa1.style.opacity=0;
    opa2.style.opacity=1;
    opa3.style.opacity=1;
    opa4.style.opacity=1;
    opa5.style.opacity=1;
    imgs.style.transform="translateX(0px)";
    img=1;
}
function img1(){
    img11();
    clearInterval(app);
}
function img2(){
    app=setInterval(lunbo,3000);
}
function img13(){
    opa1.style.opacity=1;
    opa2.style.opacity=0;
    opa3.style.opacity=1;
    opa4.style.opacity=1;
    opa5.style.opacity=1;
    imgs.style.transform="translateX(-1920px)";
    img=2;
}
function img3(){
    img13();
    clearInterval(app);
}
function img4(){
    app=setInterval(lunbo,3000);
}

function img15(){
    opa1.style.opacity=1;
    opa2.style.opacity=1;
    opa3.style.opacity=0;
    opa4.style.opacity=1;
    opa5.style.opacity=1;
    imgs.style.transform="translateX(-3840px)";
    img=3;
}
function img5(){
    img15();
    clearInterval(app);
}
function img6(){
    app=setInterval(lunbo,3000);
}
function img17(){
    opa1.style.opacity=1;
    opa2.style.opacity=1;
    opa3.style.opacity=1;
    opa4.style.opacity=0;
    opa5.style.opacity=1;
    imgs.style.transform="translateX(-5760px)";
    img=4;
}
function img7(){
    img17();
    clearInterval(app);
}
function img8(){
    app=setInterval(lunbo,3000);
}
function img19(){
    opa1.style.opacity=1;
    opa2.style.opacity=1;
    opa3.style.opacity=1;
    opa4.style.opacity=1;
    opa5.style.opacity=0;
    imgs.style.transform="translateX(-7680px)";
    img=5;
}
function img9(){
    img19();
    clearInterval(app);
}
function img10(){
    app=setInterval(lunbo,3000);
}
window.onload=app;
var img=1;
function lunbo(){
    switch (img){
        case 1:
            img11();
            break;
        case 2:
            img13();
            break;
        case 3:
            img15();
            break;
        case 4:
            img17();
            break;
        case 5:
            img19();
            break;
    }
    img++;
    if(img==6){
        img=1;
    }
}
var app=setInterval(lunbo,3000);
function fi(){
    var i=this.className;
    var divs=$("#imgs .move");
    for(var div of divs){
        $(div).children().removeClass("change");
        $(div).children().removeClass("change1");
        $(div).children().removeClass("change2");
        $(div).children().removeClass("change3");
    }
    $($(divs[i]).children()[0]).addClass("change");
    $($(divs[i]).children()[1]).addClass("change1");
    $($(divs[i]).children()[2]).addClass("change2");
    $($(divs[i]).children()[3]).addClass("change3");
}
$("#allimg>li").mouseenter(fi)

