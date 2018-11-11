/**
 * Created by Administrator on 2018/10/31.
 */
var d0=new Vue({
    el:"#d0",
    data:{
        ani:[
            {url:"img/mobile_sequence_1.jpg",name:"人工智能",int:"智能伴侣",xx:"作为EVE的大脑，“NOMI”是一款具有情感的人工智能伴侣，同时布置于车辆的前排及后排，它不仅可以自主处理车辆本身的使用需求，还可持续学习用车人的习惯与兴趣，根据驾驶和生活场景来满足每个人的需求。"},
            {url:"img/mobile_sequence_2.jpg",name:"场景式空间",int:"移动生活空间",xx:"电动汽车不再受传统燃油车的设计限制，可围绕人们生活的各种场景进行可变式空间设计，如5+1的客厅级布局，全开式侧门等，真正将汽车变为移动的生活空间。"},
            {url:"img/mobile_sequence_3.jpg",name:"场景式空间    ",int:"客厅级布局",xx:"在后方车内区域中设有两个面对面的座椅，并配有一个折叠桌，让乘客之间的沟通就仿佛在家中客厅一般自在。"},
            {url:"img/mobile_sequence_4.jpg",name:"场景式空间",int:"放松全身心",xx:"后方车内区域设有一个电动豪华躺椅，可供用车人放松心情，摆脱压力和烦恼。"},
            {url:"img/mobile_sequence_5.jpg",name:"场景式空间",int:"全景座舱",xx:"EVE具备AR增强现实技术，将遍布车舱的玻璃瞬间变为智能全息屏幕，无论是前排还是后排乘客都可以享受到全景座舱体验。"},
            {url:"img/mobile_sequence_6.jpg",name:"场景式空间",int:"保留驾驶乐趣",xx:"EVE是一辆无人驾驶汽车，搭载L4+的无人驾驶系统，但方向盘和踏板可在有需要时激活，让你依旧能体验驾驶的乐趣。"},
            {url:"img/mobile_sequence_7.jpg",name:"交互",int:"融入环境",xx:"EVE 车顶也使用了增强现实全息玻璃，通过“NOMI”带来个性化控制及娱乐放松的全新体验。"},
            {url:"img/mobile_sequence_8.jpg",name:"交互",int:"个性化控制",xx:"个性化控制触摸屏，只需轻轻滑动手指，即可调节设置，与环境互动。"},
            {url:"img/mobile_sequence_9.jpg",name:"交互",int:"透明仪表盘",xx:"前方透明界面代替传统仪表盘，在显示个性化内容时给人带来开放的视觉感官。"},
            {url:"img/mobile_sequence_10.jpg",name:"交互",int:"智能全息前挡风玻璃",xx:"EVE的智能全息前挡风玻璃使用车人能够借助NOMI的建议和启迪更好地探索和了解周围的世界。"},
            {url:"img/mobile_sequence_11.jpg",name:"交互",int:"瞭望天窗",xx:"EVE的玻璃车顶将带来前所未有的景观，用车人可尽情享受清澈蓝天或满天繁星。"},
            {url:"img/mobile_sequence_12.jpg",name:"自动驾驶",int:"感官交流",xx:"EVE重新定义了自动驾驶汽车如何实现车与车、车与行人之间的对话。"},
            {url:"img/mobile_sequence_13.jpg",name:"自动驾驶",int:"状态指示灯",xx:"EVE自动探测行人，通过前方灯带告知行人何时能够安全通行。"},
            {url:"img/mobile_sequence_14.jpg",name:"自动驾驶",int:"智能V2V联网",xx:"EVE能够辨识其他与它相似的汽车，并与它们通过智能方式相互协作，从而提升交通系统整体效率。"},
            {url:"img/mobile_sequence_15.jpg",name:"自动驾驶",int:"智能路线规划",xx:"EVE作为车联网中的一部分，能够收集分享有效信息，从而减少拥堵，帮助用车人更快到达目的地。"},
            {url:"img/mobile_sequence_16.jpg",name:"设计语言",int:"家族基因",xx:"EVE使用前沿的设计语言，体现在它的长轴距、短悬挂、低座舱和大轮毂上。自由浮动的蔚来X-Bar、轮拱的流线型硬朗线条和独特的蔚来尾灯设计使蔚来家族基因一目了然。"},
            {url:"img/mobile_sequence_17.jpg",name:"设计语言",int:"动态遮光层",xx:"侧身表面的动态遮光层可瞬间从全避光变为全透明，使用车人能够避免阳光的照射，或将前方的地平线尽收眼底。"},
            {url:"img/mobile_sequence_18.jpg",name:"设计语言",int:"隐藏式车门",xx:"轻触遥控器，单扇前滑车门就将为你打开。"},
            {url:"img/mobile_sequence_19.jpg",name:"",int:"蔚来已来",xx:""},
            {url:"img/mobile_sequence_20.jpg",name:"设计语言",int:"",xx:""},
        ],
        img:{url:"img/mobile_sequence_2.jpg",name:"场景式空间",int:"移动生活空间",xx:"电动汽车不再受传统燃油车的设计限制，可围绕人们生活的各种场景进行可变式空间设计，如5+1的客厅级布局，全开式侧门等，真正将汽车变为移动的生活空间。"},
    }
})
var index=0;
var scrollFunc=function(e) {
    e = e || window.event;
    if (e.wheelDelta) {//IE/Opera/Chrome
        if (e.wheelDelta > 0) {

        } else {
            var texts=$(".textcenter")
            if(index==0){
                var innerindex=0;
                var t0=setInterval(()=>{
                    $(texts[innerindex]).addClass("huanyuan");
                    innerindex++;
                    if(innerindex==3){
                        clearInterval(t0);
                    }
                },300)
                setTimeout(()=>{
                    $("#img1").addClass("change");
                },1000)
                setTimeout(()=>{
                    $("#img1").removeClass("ty_361");
                },5000)
                setTimeout(()=>{
                    d0.img.url=d0.ani[2].url;
                    $("#img1").addClass("ty_361").removeClass("change");
                },5001);
                index++;
            }else{
                var innerindex=2;
                var t0=setInterval(()=>{
                    $(texts[innerindex]).removeClass("huanyuan");
                    innerindex--;
                    if(innerindex==-1){
                        clearInterval(t0);
                    }
                },300)
                setTimeout(()=>{
                    d0.img=d0.ani[index];
                    console.log(d0.img);
                },1100);
                setTimeout(()=>{
                    $(texts[0]).addClass("huanyuan");
                },1600);
                setTimeout(()=>{
                    $(texts[1]).addClass("huanyuan");
                },1900);
                setTimeout(()=>{
                    $(texts[2]).addClass("huanyuan");
                },2200);
                setTimeout(()=>{
                    $("#img1").addClass("change");
                },2300)
                setTimeout(()=>{
                    $("#img1").removeClass("ty_361");
                    d0.img.url=d0.ani[index+1].url;
                    $("#img1").addClass("ty_361").removeClass("change");
                },6300)
                setTimeout(()=>{

                },6301);
                index++;
            }

        }
    }
}
window.onmousewheel=scrollFunc;