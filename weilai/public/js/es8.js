/**
 * Created by web on 2018/10/12.
 */
var divs=$(".translatexy")
for(div of divs){
    var arr1=[];
    var arr2=[];
    $(div).mouseenter(function (e) {
        e.stopPropagation();
        var $div=$(this);
        var w=$div.width();
        var h=$div.height();
        var x=e.offsetX;
        var y=e.offsetY;
        //console.log(x,y);
        if(-5<x&&x<30){
            $($div.children()[1]).addClass("translateX100per").removeClass("change0").removeClass("change1").removeClass("change2").removeClass("change3");
        }
        if(x<w+5&&w-30<x){
            $($div.children()[1]).addClass("translateX_100per").removeClass("change0").removeClass("change1").removeClass("change2").removeClass("change3");
        }
        if(-5<y&&y<30){
            $($div.children()[1]).addClass("translateY100per").removeClass("change0").removeClass("change1").removeClass("change2").removeClass("change3");
        }
        if(y<h+5&&h-30<y){
            $($div.children()[1]).addClass("translateY_100per").removeClass("change0").removeClass("change1").removeClass("change2").removeClass("change3");
        }
    })
    $(div).mousemove(function(e){
        e.preventDefault();
        var $div=$(this);
        var w=$div.width();
        var h=$div.height();
        var x=e.offsetX;
        var y=e.offsetY;
    })
    $(div).mouseleave(function (e) {
        e.stopPropagation();
        var $div=$(this)
        var w=$div.width();
        var h=$div.height();
        var x=e.offsetX;
        var y=e.offsetY;
        if(-5<x&&x<30){
            $($div.children()[1]).addClass("change1").removeClass("translateX100per").removeClass("translateX_100per").removeClass("translateY100per").removeClass("translateY_100per");
            setTimeout(()=>{
                $($div.children()[1]).attr("transfrom","translateX(0)")
            },490)
        }
        if(x<w+5&&w-30<x){
            $($div.children()[1]).addClass("change0").removeClass("translateX100per").removeClass("translateX_100per").removeClass("translateY100per").removeClass("translateY_100per");
            setTimeout(()=>{
                $($div.children()[1]).attr("transfrom","translateX(0)")
            },490)
        }
        if(-5<y&&y<30){
            $($div.children()[1]).addClass("change2").removeClass("translateX100per").removeClass("translateX_100per").removeClass("translateY100per").removeClass("translateY_100per");
            setTimeout(()=>{
                $($div.children()[1]).attr("transfrom","translateX(0)")
            },490)
        }
        if(y<h+5&&h-30<y){
            $($div.children()[1]).addClass("change3").removeClass("translateX100per").removeClass("translateX_100per").removeClass("translateY100per").removeClass("translateY_100per");
            setTimeout(()=>{
                $($div.children()[1]).attr("transfrom","translateX(0)")
            },490)
        }
    })
}
function turndown(){
    var inwid=window.innerWidth;
    var inhei=window.innerHeight;
    var mt=document.documentElement.scrollTop + inhei;
    console.log(mt)
    if(mt>938&&mt<1038){
        $(".textcenter.fz36.mt80.w1903").addClass("huanyuan");
    }
    if(mt<1138&&mt>1121){
        var str1="ES8是一款高性能智能电动7座SUV，拥有源于赛道冠军的极致性能，也是一个移动生活空间，搭载NIO PILOT自动辅助驾驶系统以及全球首个车载人工智能伙伴NOMI，重新定义拥有汽车的体验。";

        var str1in="";
        var str1l=0;
        var t0 = setInterval(()=>{
            str1l+=1;
            str1in=str1.slice(0,str1l);
            $("#text1").text(str1in);
            if(str1l==str1.length){
                clearInterval(t0)
            }
        },150)
    }
    if(mt>1140&&mt<1160){
        var xh=0;
        var t1 = setInterval(()=>{
            xh+=5;
            $($(".fz45.fbold.textcenter")[0]).text(xh)
            if(xh==500){
                clearInterval(t1);
            }
        },40)
        var lc=0;
        var t2 = setInterval(()=>{
            lc+=5;
            $($(".fz45.fbold.textcenter")[1]).text(lc)
            if(lc==355){
                clearInterval(t2)
            }
        },40)
        var time=0;
        var t3 = setInterval(()=>{
            time+=1000;
            $($(".fz45.fbold.textcenter")[2]).text(time/10000)
            if(time==44000){
                clearInterval(t3)
            }
        },100)
        var ml=0;
        var t4 = setInterval(()=>{
            ml+=13;
            $($(".fz45.fbold.textcenter")[3]).text(ml)
            if(ml==650){
                clearInterval(t4)
            }
        },88)
    }
    if(mt>1700&&mt<1720){
        $($(".imgcover.tx-200.opacity0.transitionall1s")[0]).addClass("huanyuan");
        var tup=0;
        var t5=setInterval(()=>{
            $($(".div1")[tup]).addClass("huanyuan");
            tup++;
            if(tup==6){
                clearInterval(t5);
            }
        },300)
        $($(".imgcover.tx-200.opacity0.transitionall1s_2p2s")[0]).addClass("huanyuan");
        setTimeout(()=>{
            $($(".div2")[0]).addClass("huanyuan");
        },3200)
        setTimeout(()=>{
            $($(".div2")[1]).addClass("huanyuan");
        },3500)
        setTimeout(()=>{
            $($(".div2")[2]).addClass("huanyuan");
        },3800)
        setTimeout(()=>{
            $($(".div2")[3]).addClass("huanyuan");
        },4100)
        setTimeout(()=>{
            $($(".div2")[4]).addClass("huanyuan");
        },4400)

    }
    if(mt>2359&&mt<2379){
        var div3=0;
        var t6=setInterval(()=>{
            $($(".div3")[div3]).addClass("huanyuan");
            div3++;
            if(div3==7){
                clearInterval(t6);
            }
        },300)
    }
    if(mt>3338&&mt<3358){
        var text1="车不仅仅是一个交通工具，更是一个移动的生活空间。ES8拥有3,010mm，同级最长轴距，塑造了一个三排七座八种模式的灵活空间。全球首创女王副驾，亲子模式带来全新的车内场景体验。舒适真皮包覆的温暖空间，结合智能空气净化系统，高级环绕音响系统创造全感官愉悦体验。"
        var text1Index=0;
        var div4=0;
        var t7=null;
        if(!t4){
            t4=setInterval(()=>{
                text1Index++;
                var text1t=text1.slice(0,text1Index)
                $($(".text1")).text(text1t)
                if(div4==text1.length){
                    clearInterval(t7)
                }
            },150)
        }

        setTimeout(()=>{
            $($(".div4")[0]).addClass("huanyuan")
        })
        setTimeout(()=>{
            $($(".div4")[1]).addClass("huanyuan")
        },20000)
    }
    if(mt>3923&&mt<3943){
        $($(".img1")[0]).addClass("change4");
        $($(".img1")[1]).addClass("change5");
        $($(".img1")[2]).addClass("change6");
        $($(".img1")[3]).addClass("change7");
        $($(".img1")[4]).addClass("change8");
        setTimeout(()=>{
            $($(".img1")[0]).removeClass("opacity0")
        },990)
        setTimeout(()=>{
            $($(".img1")[1]).removeClass("opacity0")
        },1490)
        setTimeout(()=>{
            $($(".img1")[2]).removeClass("opacity0")
        },1990)
        setTimeout(()=>{
            $($(".img1")[3]).removeClass("opacity0")
        },2490)
        setTimeout(()=>{
            $($(".img1")[4]).removeClass("opacity0")
        },2990)
    }
}
var imgs = $(".translatexy");
for(img of imgs){
    $(img).click(function () {
       var $img=$(this);
        $img.removeClass("bghoverbig").removeClass("pointer");
        $($img.children()[0]).addClass("imgall").addClass("hb");
        $("body").addClass("overhid");
        $($(".close")[0]).removeClass("dnone")

    })
}
$($(".close")[0]).click(function () {
    $($(".imgall")[0]).parent().addClass("bghoverbig")
    $($(".imgall")[0]).removeClass("imgall").addClass("pointer");
    $("body").removeClass("overhid");
    $($(".close")[0]).addClass("dnone");
});
