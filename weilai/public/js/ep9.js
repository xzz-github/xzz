/**
 * Created by web on 2018/10/20.
 */
var d1=new Vue({
    el:"#d1",
    data:{
        o0:false,
        show:true
    }
})
var d2=new Vue({
    el:"#d2",
    data:{
        o0:true,
        show:true,
        dnone:false,

    },
    methods:{
        play(){
            this.dnone=true;
            video0.play();
        },
        stop(){
            this.dnone=false;
            video0.load();
        },
    }
})
var d3=new Vue({
    el:"#d3",
    data:{
        show:true,

    }
})
var d4 = new Vue({
    el:"#d4",
    data:{
        show:true,
        dnone1:false
    },
    methods:{
        play1(){
            this.dnone1=true;
            video1.play();
        },
        stop1(){
            this.dnone1=false;
            video1.load();
        }
    }
})
var d5 = new Vue({
    el:"#d5",
    data:{
        show:true,
        dnone:false,
        dnoneo:false
    },
    methods:{
        play2(){
            this.dnone=true;
            video2.play();
            console.log("play2");
        },
        stop2(){
            this.dnone=false;
            video2.load();
        },
        play3(){
            this.dnoneo=true;
            video3.play();
            console.log("play3");
        },
        stop3(){
            this.dnoneo=false;
            video3.load();
        }
    }
})
var d6 = new Vue({
    el:"#swiper",
    data:{
        swiperItem:[
            {url:"img/EP9_Experience_3_3840.jpg",dnone:false,text1:"准备好",text2:"感受EP9带来的前所未有的感官体验",text3:""},
            {url:"img/EP9_Experience_1_3840.jpg",dnone:true,text1:"抓紧了",text2:"去抵抗3G重力加速度",text3:"释放三倍肾上腺素"},
            {url:"img/EP9_Experience_2_3840.jpg",dnone:true,text1:"去驾驭",text2:"1,360匹马力",text3:"电力十足激情无限"},
            {url:"img/EP9_Experience_4_3840.jpg",dnone:true,text1:"与心赛跑",text2:"7.1秒从静止加速到200公里",text3:"仅相当于七次心跳的时间"},
            {url:"img/EP9_Experience_5_3840.jpg",dnone:true,text1:"征服压力",text2:"24000牛最大下压力",text3:"2倍于现今F1赛车下压力值"},
        ],
        item:0,
        show:true
    },
    created(){
        var i=this.item;
        setInterval(()=>{
            for(s in this.swiperItem){
                this.swiperItem[s].dnone=true;
            }
            i++;
            if(i==5){
                i=0;
            }
            this.swiperItem[i].dnone=false;
        },3000)
    }
})
var d7=new Vue({
    el:"#d7",
    data:{
        show:true,
        o0:true
    }
})
var page=0;
var scrollFunc=function(e){
    e = e || window.event;
    if (e.wheelDelta) {//IE/Opera/Chrome
        if(e.wheelDelta>0){
            if(page==0){

            }
        }else{
            if(page==0){
                $(".absolute.d1img.change4").addClass("change5").removeClass("change4");
                setTimeout(()=>{
                    $(".d1img").addClass("opacity0");
                },990)
                setTimeout(()=>{
                    d1.o0=true;
                },1190)
                setTimeout(()=>{
                    d1.show=false;
                    d2.show=true;
                    d2.o0=false
                },1490);
                var div1s=$(".div1");
                setTimeout(()=>{
                    $(div1s[0]).addClass("huanyuan");
                },1900)
                setTimeout(()=>{
                    $(div1s[1]).addClass("huanyuan");
                },2200)
                setTimeout(()=>{
                    $(div1s[2]).addClass("huanyuan");
                },2500)
                setTimeout(()=>{
                    $(div1s[3]).addClass("huanyuan");
                },2800)
                setTimeout(()=>{
                    $(div1s[4]).addClass("huanyuan");
                },3100)
                setTimeout(()=>{
                    $(div1s[5]).addClass("huanyuan");
                },3500)

            }
            if(page==1){
                var div1s=$(".div1");
                var div1Index=5;
                var t0 = setInterval(()=>{
                    $(div1s[div1Index]).removeClass("huanyuan")
                    div1Index--;
                    if(div1Index==-1){
                        clearInterval(t0)
                    }
                },300)
                setTimeout(()=>{
                    d2.show=false;
                },2000)

                var div3s=$(".div3");
                setTimeout(()=>{
                    $(div3s[0]).addClass("huanyuan");
                    $(div3s[1]).addClass("huanyuan");
                    $(div3s[2]).addClass("huanyuan");
                    $(div3s[3]).addClass("huanyuan");
                },2000)
            }
            if(page==2){
                var div3s=$(".div3");
                $(div3s[0]).addClass("opacity0").removeClass("huanyuan");
                $(div3s[1]).addClass("opacity0").removeClass("huanyuan");
                $(div3s[2]).addClass("opacity0").removeClass("huanyuan");
                $(div3s[3]).addClass("opacity0").removeClass("huanyuan");
                setTimeout(()=>{
                    d3.show=false;
                },990)
                var div4s=$(".div4")
                setTimeout(()=>{
                    $(div4s[0]).addClass("huanyuan")
                },1000)
                setTimeout(()=>{
                    $(div4s[1]).addClass("huanyuan")
                },1490)
                setTimeout(()=>{
                    $(div4s[2]).addClass("huanyuan")
                },1990)
                setTimeout(()=>{
                    $(div4s[3]).addClass("huanyuan")
                },2490)
            }
            if(page==3){
                var div4sIndex=3;
                var div4s=$(".div4")
                var t1 = setInterval(()=>{
                    $(div4s[div4sIndex]).removeClass("huanyuan");
                    div4sIndex--;
                    if(div4sIndex==-1){
                        clearInterval(t1);
                    }
                },400)
                setTimeout(()=>{
                    d4.show=false;
                },2200)
                var div5s=$(".div5")
                setTimeout(()=>{
                    $(div5s[0]).addClass("huanyuan")
                },2200)
                setTimeout(()=>{
                    $(div5s[1]).addClass("huanyuan")
                },2860)
            }
            if(page==4){
                var div5s=$(".div5");
                var div5Index=1;
                var t2 = setInterval(()=>{
                    $(div5s[div5Index]).removeClass("huanyuan");
                    div5Index--
                    if(div5Index==-1){
                        clearInterval(t2)
                    }
                },500)
                setTimeout(()=>{
                    d5.show=false
                    $(".div6").addClass("huanyuan")
                },1600)
            }
            if(page==5){
                $(".div6").removeClass("huanyuan");
                setTimeout(()=>{
                    d6.show=false;
                    d7.o0=false
                },990)
                var div7s=$(".div7");
                setTimeout(()=>{
                    $(div7s[0]).addClass("huanyuan");
                },1990)
                setTimeout(()=>{
                    $(div7s[1]).addClass("huanyuan");
                },2490)
            }
            page++;
            if(page==6){
                page=5;
            }
        }
    }
}
/*注册事件*/
if(document.addEventListener){
    document.addEventListener('DOMMouseScroll',scrollFunc,false);
}
window.onmousewheel=scrollFunc;
var img1s=$(".img1");
for(var img1  of img1s){
    $(img1).click(function () {
        $(this).parent().removeClass("overhid").removeClass("bghoverbig").removeClass("ty100per").removeClass("ty_100per").removeClass("huanyuan").removeClass("opacity0").removeClass("transitionall1s");
        $(this).parent().parent().removeClass("overhid").removeClass("bghoverbig").removeClass("ty100per").removeClass("ty_100per").removeClass("huanyuan").removeClass("opacity0").removeClass("transitionall1s");
        $(this).addClass("imgall");
        $(".close").removeClass("dnone");
    })
}
$(".close").click(function () {
    $(".imgall").parent().addClass("transitionall1s");
    $(".imgall").parent().parent().addClass("transitionall1s");
    $(".imgall").addClass("bghoverbig").removeClass("imgall");
    $(".close").addClass("dnone");
})
