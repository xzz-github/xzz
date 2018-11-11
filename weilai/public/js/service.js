window.onload=function(){
  var vm=new Vue({
    el:"#banner-part",
    data:{
        a:null,
        tranValue:null,
        list1:[{id:"img/banner-6.jpg",name:"img/icon1.png",data1:"Gallery",data2:"了解蔚来品牌和产品"},{id:"img/banner-2.jpg",name:"img/icon2.png",data1:"Living Room",data2:"轻松舒适的休息区"},{id:"img/banner-3.jpg",name:"img/icon3.png",data1:"Forum",data2:"思想,灵感碰撞的剧场"},{id:"img/banner-4.jpg",name:"img/icon4.png",data1:"Labs",data2:"可预订的会议室和共享工作空间"},{id:"img/banner-5.jpg",name:"img/icon5.png",data1:"Library",data2:"知识博物馆,放松独处的空间"},{id:"img/banner-6.jpg",name:"img/icon6.png",data1:"NIO Cafe",data2:"品尝蔚来专属咖啡"},{id:"img/banner-7.jpg",name:"img/icon7.png",data1:"Joy Camp",data2:"孩子的乐园"},{id:"img/banner-3.jpg",name:"img/icon8.png",data1:"Gallery",data2:"了解蔚来品牌和产品"}]
    },
    methods:{
        click(i){this.a=i}
    },
    watch:{
        a:function(){
            if(this.a==1){this.tranValue=0;console.log(this.tranValue);}
            else{this.tranValue=-window.innerWidth+20;console.log(this.tranValue);}
        }
    }
});
vm.a=1;
setInterval(function(){
        if(vm.a==1){vm.a=2}
        else(vm.a=1)
        console.log(vm.a);
    },5000);


    new Vue({
    el:"#banner-part2",
    data:{
    }
});
    new Vue({
    el:"#banner-part3",
    data:{
        list2:[{address1:"北京",address2:"北京国际车展",time:"2017年11月开业"},{address1:"北京",address2:"东方广场",time:"2017年11月开业"},{address1:"北京",address2:"中关村",time:"2017年12月开业"},{address1:"上海",address2:"兴业太古汇",time:"2018年5月开业"},{address1:"广州 ",address2:"珠江新城",time:"2018年1月开业"},{address1:"深圳",address2:"平安金融中心大厦",time:"2018年8月开业"},{address1:"南京",address2:"新街口",time:"2018年5月开业"},{address1:"杭州",address2:"西湖",time:"2018年5月开业"},{address1:"上海",address2:"上海中心大厦",time:"2018年9月开业"},{address1:"苏州",address2:"苏州中心",time:"2018年7月开业"}]
    }
});
}
