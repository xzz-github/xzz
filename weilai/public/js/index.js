/**
 * Created by Administrator on 2018/9/27.
 */
new Vue({
    el:"#index_mod1",
    data:{
        msg:"高性能智能电动7座SUV",
        bgw:false,
        dnone:false
    },
    methods:{
        bthov(){
            this.bgw=!this.bgw;
        },
        play(){
            this.dnone=true;
            video1.play()
        },
        stop(){
            this.dnone=false;
            video1.load();
        }
    }
});
new Vue({
    el:"#indexSwipe",
    data:{
        swipe:[{point:true,hidden:false,img:'img/nioday-homepage-appcarousel-01-v1.jpg'},
            {point:false,hidden:true,img:'img/nioday-homepage-appcarousel-02-v1.jpg'},
            {point:false,hidden:true,img:'img/nioday-homepage-appcarousel-03-v1.jpg'},
            {point:false,hidden:true,img:'img/nioday-homepage-appcarousel-04-v1.jpg'}],
        i:0
    },
    methods:{
        chooseSwipe(i){
            for(obj of this.swipe){
                obj.point=false;
                obj.hidden=true;
            }
            this.swipe[i].point=true;
            this.swipe[i].hidden=false;
            this.i=i;
        }
    },
    created(){
        var chooseSwipe=this.chooseSwipe;
        setInterval(()=>{
            this.i+=1;
            if(this.i==4){
                this.i=0;
            }
            chooseSwipe(this.i);
        },3000)
    }
});
document.body.onload=function(){
    var $div=$(".relative.w1903.h872");
    $($div.children()[2]).addClass("huanyuan");
    setTimeout(()=>{
        $($div.children()[3]).addClass("huanyuan");
    },500)
}
document.body.onscroll=function(){
    var inwid=window.innerWidth;
    var inhei=window.innerHeight;
    var mt=document.documentElement.scrollTop + inhei;
    console.log(mt)
    if(mt>1120){
        $(".w48per.h571.bgusercenter").addClass("huanyuan");
        $(".w48per.h571.bgpowercenter").addClass("huanyuan");
    }
}