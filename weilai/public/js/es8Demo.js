/**
 * Created by web on 2018/10/24.
 */
var leftDiv=new Vue({
    el:"#demo",
    data:{
        text:[{line1:"嗨,想带什么",line2:"颜色的ES8回家？",dnone:false,textup:false},
            {line1:"各种轮毂，",line2:"哪个更合你心意？",dnone:true,textup:false},
            {line1:"归家般舒适",line2:"的内饰，选一个适合你的",dnone:true,textup:false},
            {line1:"增配自由选择，",line2:"让你的爱车升级",dnone:true,textup:false}],
        section:[{index:0,dnone:false,bg00bebe:true,text:"颜色",change0:true,textdnone:false},
            {index:1,dnone:true,bg00bebe:false,text:"轮毂",change0:false,textdnone:true},
            {index:2,dnone:true,bg00bebe:false,text:"内饰",change0:false,textdnone:true},
            {index:3,dnone:true,bg00bebe:false,text:"选装",change0:false,textdnone:true}],
        index:0
    },
    methods:{
        chooseDemo(index){
            for(var msg of this.section){
                msg.dnone=true;
                msg.bg00bebe=false;
                msg.change0=false;
            }
            for(t of this.text){
                t.textup=false;
                t.dnone=true;
            }
            var i=this.index;
            this.index=index;
            this.section[index].dnone=false;
            this.section[index].bg00bebe=true;
            this.section[index].change0=true;
            if(i!=index){
                this.text[i].textup=true;
            }
            this.section[index].textdnone=false;
            setTimeout(()=>{
                this.text[index].dnone=false;
            },390);
            if(index!=0){
                rightDiv.div1=true;
            }
            if(index!=1){
                rightDiv.div2=true;
            }
            if(index!=2){
                rightDiv.div3=true;
                rightDiv.showinner=false;
            }
            if(index!=3){
                rightDiv.div4=true;
                rightDiv.showover=false;
            }
            if(index==0){
                rightDiv.div1=false;
                rightDiv.showcars=true;
                indexall=0;
            }
            if(index==1){
                rightDiv.div2=false;
                rightDiv.showcars=true;
                if(rightDiv.color==0){
                    this.section[0].text="云白 已包含";
                }
                indexall=1;
            }
            if(index==2){
                rightDiv.showcars=false;
                if(rightDiv.lunzi==0){
                    this.section[1].text="19英寸五辐合金轮毂 已包含";
                }
                if(rightDiv.color==0){
                    this.section[0].text="云白 已包含";
                }
                rightDiv.showinner=true;
                indexall=2;
            }
            if(index==3){
                rightDiv.showcars=false;
                rightDiv.showinner=false;
                if(rightDiv.lunzi==0){
                    this.section[1].text="19英寸五辐合金轮毂 已包含";
                }
                if(rightDiv.color==0){
                    this.section[0].text="云白 已包含";
                }
                if(rightDiv.inner==0){
                    this.section[2].text="运动灰 已包含";
                }
                rightDiv.showover=true;
                indexall=3;
            }
        },

    },
    mounted:function(){
        var c0=document.getElementsByClassName("canvas");
        for(var can of c0){
            var ctx=can.getContext("2d");
            ctx.beginPath();
            ctx.strokeStyle="#00bebe";
            ctx.lineWidth=2;
            ctx.arc(17,17,15,0,1.5*Math.PI);
            ctx.stroke();
        }
    }
})
var rightDiv=new Vue({
    el:"#cars",
    data:{
        car:[[{url:"img/cars/composite_7_140_LF_DEFAULT_WEB.png"},
                {url:"img/cars/composite_7_140_LR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_7_140_REAR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_7_140_SIDE_DEFAULT_WEB.png"},
                {url:"img/cars/composite_7_140_FRONT_DEFAULT_WEB.png"}],
            [{url:"img/cars/composite_7_5_LF_DEFAULT_WEB.png"},
                {url:"img/cars/composite_7_5_LR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_7_5_REAR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_7_5_SIDE_DEFAULT_WEB.png"},
                {url:"img/cars/composite_7_5_FRONT_DEFAULT_WEB.png"}],
            [{url:"img/cars/composite_7_4_LF_DEFAULT_WEB.png"},
                {url:"img/cars/composite_7_4_LR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_7_4_REAR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_7_4_SIDE_DEFAULT_WEB.png"},
                {url:"img/cars/composite_7_4_FRONT_DEFAULT_WEB.png"}],
            [{url:"img/cars/composite_7_60_LF_DEFAULT_WEB.png"},
                {url:"img/cars/composite_7_60_LR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_7_60_REAR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_7_60_SIDE_DEFAULT_WEB.png"},
                {url:"img/cars/composite_7_60_FRONT_DEFAULT_WEB.png"}],
            [{url:"img/cars/composite_6_140_LF_DEFAULT_WEB.png"},
                {url:"img/cars/composite_6_140_LR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_6_140_REAR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_6_140_SIDE_DEFAULT_WEB.png"},
                {url:"img/cars/composite_6_140_FRONT_DEFAULT_WEB.png"}],
            [{url:"img/cars/composite_6_5_LF_DEFAULT_WEB.png"},
                {url:"img/cars/composite_6_5_LR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_6_5_REAR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_6_5_SIDE_DEFAULT_WEB.png"},
                {url:"img/cars/composite_6_5_FRONT_DEFAULT_WEB.png"}],
            [{url:"img/cars/composite_6_4_LF_DEFAULT_WEB.png"},
                {url:"img/cars/composite_6_4_LR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_6_4_REAR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_6_4_SIDE_DEFAULT_WEB.png"},
                {url:"img/cars/composite_6_4_FRONT_DEFAULT_WEB.png"}],
            [{url:"img/cars/composite_6_60_LF_DEFAULT_WEB.png"},
                {url:"img/cars/composite_6_60_LR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_6_60_REAR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_6_60_SIDE_DEFAULT_WEB.png"},
                {url:"img/cars/composite_6_60_FRONT_DEFAULT_WEB.png"}],
            [{url:"img/cars/composite_8_140_LF_DEFAULT_WEB.png"},
                {url:"img/cars/composite_8_140_LR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_8_140_REAR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_8_140_SIDE_DEFAULT_WEB.png"},
                {url:"img/cars/composite_8_140_FRONT_DEFAULT_WEB.png"}],
            [{url:"img/cars/composite_8_5_LF_DEFAULT_WEB.png"},
                {url:"img/cars/composite_8_5_LR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_8_5_REAR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_8_5_SIDE_DEFAULT_WEB.png"},
                {url:"img/cars/composite_8_5_FRONT_DEFAULT_WEB.png"}],
            [{url:"img/cars/composite_8_4_LF_DEFAULT_WEB.png"},
                {url:"img/cars/composite_8_4_LR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_8_4_REAR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_8_4_SIDE_DEFAULT_WEB.png"},
                {url:"img/cars/composite_8_4_FRONT_DEFAULT_WEB.png"}],
            [{url:"img/cars/composite_8_60_LF_DEFAULT_WEB.png"},
                {url:"img/cars/composite_8_60_LR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_8_60_REAR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_8_60_SIDE_DEFAULT_WEB.png"},
                {url:"img/cars/composite_8_60_FRONT_DEFAULT_WEB.png"}],
            [{url:"img/cars/composite_9_140_LF_DEFAULT_WEB.png"},
                {url:"img/cars/composite_9_140_LR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_9_140_REAR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_9_140_SIDE_DEFAULT_WEB.png"},
                {url:"img/cars/composite_9_140_FRONT_DEFAULT_WEB.png"}],
            [{url:"img/cars/composite_9_5_LF_DEFAULT_WEB.png"},
                {url:"img/cars/composite_9_5_LR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_9_5_REAR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_9_5_SIDE_DEFAULT_WEB.png"},
                {url:"img/cars/composite_9_5_FRONT_DEFAULT_WEB.png"}],
            [{url:"img/cars/composite_9_4_LF_DEFAULT_WEB.png"},
                {url:"img/cars/composite_9_4_LR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_9_4_REAR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_9_4_SIDE_DEFAULT_WEB.png"},
                {url:"img/cars/composite_9_4_FRONT_DEFAULT_WEB.png"}],
            [{url:"img/cars/composite_9_60_LF_DEFAULT_WEB.png"},
                {url:"img/cars/composite_9_60_LR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_9_60_REAR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_9_60_SIDE_DEFAULT_WEB.png"},
                {url:"img/cars/composite_9_60_FRONT_DEFAULT_WEB.png"}],
            [{url:"img/cars/composite_10_140_LF_DEFAULT_WEB.png"},
                {url:"img/cars/composite_10_140_LR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_10_140_REAR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_10_140_SIDE_DEFAULT_WEB.png"},
                {url:"img/cars/composite_10_140_FRONT_DEFAULT_WEB.png"}],
            [{url:"img/cars/composite_10_5_LF_DEFAULT_WEB.png"},
                {url:"img/cars/composite_10_5_LR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_10_5_REAR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_10_5_SIDE_DEFAULT_WEB.png"},
                {url:"img/cars/composite_10_5_FRONT_DEFAULT_WEB.png"}],
            [{url:"img/cars/composite_10_4_LF_DEFAULT_WEB.png"},
                {url:"img/cars/composite_10_4_LR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_10_4_REAR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_10_4_SIDE_DEFAULT_WEB.png"},
                {url:"img/cars/composite_10_4_FRONT_DEFAULT_WEB.png"}],
            [{url:"img/cars/composite_10_60_LF_DEFAULT_WEB.png"},
                {url:"img/cars/composite_10_60_LR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_10_60_REAR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_10_60_SIDE_DEFAULT_WEB.png"},
                {url:"img/cars/composite_10_60_FRONT_DEFAULT_WEB.png"}],
            [{url:"img/cars/composite_62_140_LF_DEFAULT_WEB.png"},
                {url:"img/cars/composite_62_140_LR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_62_140_REAR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_62_140_SIDE_DEFAULT_WEB.png"},
                {url:"img/cars/composite_62_140_FRONT_DEFAULT_WEB.png"}],
            [{url:"img/cars/composite_62_5_LF_DEFAULT_WEB.png"},
                {url:"img/cars/composite_62_5_LR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_62_5_REAR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_62_5_SIDE_DEFAULT_WEB.png"},
                {url:"img/cars/composite_62_5_FRONT_DEFAULT_WEB.png"}],
            [{url:"img/cars/composite_62_4_LF_DEFAULT_WEB.png"},
                {url:"img/cars/composite_62_4_LR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_62_4_REAR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_62_4_SIDE_DEFAULT_WEB.png"},
                {url:"img/cars/composite_62_4_FRONT_DEFAULT_WEB.png"}],
            [{url:"img/cars/composite_62_60_LF_DEFAULT_WEB.png"},
                {url:"img/cars/composite_62_60_LR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_62_60_REAR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_62_60_SIDE_DEFAULT_WEB.png"},
                {url:"img/cars/composite_62_60_FRONT_DEFAULT_WEB.png"}],
            [{url:"img/cars/composite_173_140_LF_DEFAULT_WEB.png"},
                {url:"img/cars/composite_173_140_LR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_173_140_REAR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_173_140_SIDE_DEFAULT_WEB.png"},
                {url:"img/cars/composite_173_140_FRONT_DEFAULT_WEB.png"}],
            [{url:"img/cars/composite_173_5_LF_DEFAULT_WEB.png"},
                {url:"img/cars/composite_173_5_LR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_173_5_REAR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_173_5_SIDE_DEFAULT_WEB.png"},
                {url:"img/cars/composite_173_5_FRONT_DEFAULT_WEB.png"}],
            [{url:"img/cars/composite_173_4_LF_DEFAULT_WEB.png"},
                {url:"img/cars/composite_173_4_LR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_173_4_REAR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_173_4_SIDE_DEFAULT_WEB.png"},
                {url:"img/cars/composite_173_4_FRONT_DEFAULT_WEB.png"}],
            [{url:"img/cars/composite_173_60_LF_DEFAULT_WEB.png"},
                {url:"img/cars/composite_173_60_LR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_173_60_REAR_DEFAULT_WEB.png"},
                {url:"img/cars/composite_173_60_SIDE_DEFAULT_WEB.png"},
                {url:"img/cars/composite_173_60_FRONT_DEFAULT_WEB.png"}]

        ],
        swipe:[{url:"img/cars/composite_7_140_LF_DEFAULT_WEB.png",img1:true,img2:false,img3:false,img4:false,img5:false},
            {url:"img/cars/composite_7_140_LR_DEFAULT_WEB.png",img1:false,img2:true,img3:false,img4:false,img5:false},
            {url:"img/cars/composite_7_140_REAR_DEFAULT_WEB.png",img1:false,img2:false,img3:true,img4:false,img5:false},
            {url:"img/cars/composite_7_140_SIDE_DEFAULT_WEB.png",img1:false,img2:false,img3:false,img4:true,img5:false},
            {url:"img/cars/composite_7_140_FRONT_DEFAULT_WEB.png",img1:false,img2:false,img3:false,img4:false,img5:true}],
        index:0,
        color:0,
        lunzi:0,
        arc:[{text:"云白",bgc:"bgc1 colorclick"},
            {text:"深空黑",bgc:"bgc2"},
            {text:"天蓝",bgc:"bgc3"},
            {text:"星灰",bgc:"bgc4"},
            {text:"极光棕",bgc:"bgc5"},
            {text:"晨曦红",bgc:"bgc6"},
            {text:"星空蓝",bgc:"bgc7"}],
        div1:false,
        div2:true,
        div3:true,
        div4:true,
        lz:[{url:"img/cars/40c2da9d-a3f7-45b0-99e4-ca180c3067ef.png",text:"19英寸五辐合金轮毂",cla:"colorclick"},
            {url:"img/cars/4e777b9d-2120-4c05-8a32-5c5f53c4f147.png",text:"20英寸抛光合金轮毂",cla:""},
            {url:"img/cars/c5e5ac40-f575-4048-aebb-1298f4ad6a4d.png",text:"20英寸多辐合金轮毂",cla:""},
            {url:"img/cars/ceb2feb0-12b5-46b0-aef9-0cdf2e8c186b.png",text:"21英寸运动合金轮毂",cla:""}],
        showcars:true,
        showinner:false,
        showover:false,
        inner:0,
        innerfx:0,
        innerqh:0,
        over:[{url:"img/6ee00367-75d6-43ea-aca6-2250763f81b3.jpg",name:"NIO Pilot完整功能",price:"￥39000",inner:"在ES8上，自动辅助驾驶硬件系统是一步到位的，用户可以订阅NIO Pilot蔚来自动辅助驾驶系统的完整软件功能，通过远程升级(FOTA)不断获取各项高级自动辅助驾驶功能。",div1:true,div2:false,div3:false,div4:false,dnone:false,div5:false,div6:false,buy:false},
            {url:"img/85aefc4f-11a5-4b64-9821-1d5c36c86058.jpg",name:"高级环绕音响系统",price:"￥6000",inner:"提供多达12个扬声器，包括：4个高音扬声器，4个低音扬声器，1个中置扬声器，2个环绕扬声器以及1个重低音单元，并增加至6种个性化声音氛围模式，可以获得更佳音乐聆听感受。",div1:false,div2:true,div3:false,div4:false,dnone:false,div5:false,div6:false,buy:false},
            {url:"img/72d1429b-f947-4814-8387-0c833b5a6550.jpg",name:"NOMI Mate",price:"￥4800",inner:"NOMI Mate车载智能伙伴，拥有独特的设计和丰富的情感引擎，并提供Mate专属语音，用一种全新的人车交互方式，让车成为有生命、有情感的伙伴。",div1:false,div2:false,div3:true,div4:false,dnone:false,div5:false,div6:false,buy:false},
            {url:"img/b6f0dfbc-9b2e-44ab-bc8b-926c37efe265.jpg",name:"Nappa高级内饰套装",price:"￥29000",inner:"将全车座椅和内饰包覆材质升级为高级Nappa真皮，在贴近用户的区域创造舒适的触感。同时增加前排座椅按摩功能，舒缓拥堵和长时间驾驶的疲劳。",div1:false,div2:false,div3:false,div4:true,dnone:false,div5:false,div6:false,buy:false},
            {url:"img/c2afe861-9942-4f25-a0a9-196b440db628.jpg",name:"增强平视显示系统",price:"￥5500",inner:"更大可视面积的平视显示系统，可以显示实时行车信息及导航路线，帮助驾驶员更集中于路况之上，更安全地驾驶。",div1:false,div2:false,div3:false,div4:false,dnone:false,div5:false,div6:true,buy:false},
            {url:"img/c6e496ad-e769-4946-9eab-b82b6057aaee.jpg",name:"个性签名设计套装",price:"￥4500",inner:"ES8基准版个性定制选项，包含用户可自定义的定制徽章及定制签名板，定制内容包括个人签名、个性文字镌刻，以及可供选择的十二星座及生肖等系列元素。",div1:false,div2:false,div3:false,div4:false,dnone:true,div5:false,div6:false,buy:false},
            {url:"img/c2952d0f-1d54-4281-b868-39336a7cc1fa.jpg",name:"全季节舒适套装",price:"￥6500",inner:"增加方向盘加热和二排座椅加热功能，保证低温气候下的驾驶和乘坐舒适，并提供前排座椅通风功能，在炎热的夏天也可以获得清凉感受。",div1:false,div2:false,div3:false,div4:false,dnone:false,div5:true,div6:false,buy:false},],
        divIndex:0,
        innerImglist:[{url:"img/inner/white-before-before.jpg"},
            {url:"img/inner/white-before-left.jpg"},
            {url:"img/inner/white-before-after.jpg"},
            {url:"img/inner/white-before-right.jpg"},
            {url:"img/inner/white-after-before.jpg"},
            {url:"img/inner/white-after-left.jpg"},
            {url:"img/inner/white-after-after.jpg"},
            {url:"img/inner/white-after-right.jpg"},
            {url:"img/inner/black-before-before.jpg"},
            {url:"img/inner/black-before-left.jpg"},
            {url:"img/inner/black-before-after.jpg"},
            {url:"img/inner/black-before-right.jpg"},
            {url:"img/inner/black-after-before.jpg"},
            {url:"img/inner/black-after-left.jpg"},
            {url:"img/inner/black-after-after.jpg"},
            {url:"img/inner/black-after-right.jpg"},
            {url:"img/inner/brown-before-before.jpg"},
            {url:"img/inner/brown-before-left.jpg"},
            {url:"img/inner/brown-before-after.jpg"},
            {url:"img/inner/brown-before-right.jpg"},
            {url:"img/inner/brown-after-before.jpg"},
            {url:"img/inner/brown-after-left.jpg"},
            {url:"img/inner/brown-after-after.jpg"},
            {url:"img/inner/brown-after-right.jpg"},
        ],
        innerImg:{url:"img/inner/white-before-before.jpg"},
        hidtext:[{cla:"hidtext1"},{cla:"hidtext2"}],
        hidtext3:[
            {url:"img/d881d446-f2a4-4930-bd76-b5a6de779659.png",imgb:true,imgs:false,text:"运动灰",rgba1:true,hiddiv1:true,hiddiv2:false,hiddiv3:false},
            {url:"img/41c98f21-ca88-4314-985c-76b4ece32cc0.png",imgb:false,imgs:true,text:"科技黑",rgba1:false,hiddiv1:false,hiddiv2:true,hiddiv3:false},
            {url:"img/5d7cf0fe-b76a-44af-b769-774c48002332.png",imgb:false,imgs:true,text:"都市棕",rgba1:false,hiddiv1:false,hiddiv2:false,hiddiv3:true},
        ]
    },
    methods:{
        turnright(){
            var i=this.index;

            for(msg of this.swipe){
                msg.img1=false;
                msg.img2=false;
                msg.img3=false;
                msg.img4=false;
                msg.img5=false;
            }
            if(i==0){
                this.swipe[0].img5=true;
                this.swipe[1].img1=true;
                this.swipe[2].img2=true;
                this.swipe[3].img3=true;
                this.swipe[4].img4=true;

            }
            if(i==1){
                this.swipe[0].img4=true;
                this.swipe[1].img5=true;
                this.swipe[2].img1=true;
                this.swipe[3].img2=true;
                this.swipe[4].img3=true;
            }
            if(i==2){
                this.swipe[0].img3=true;
                this.swipe[1].img4=true;
                this.swipe[2].img5=true;
                this.swipe[3].img1=true;
                this.swipe[4].img2=true;
            }
            if(i==3){
                this.swipe[0].img2=true;
                this.swipe[1].img3=true;
                this.swipe[2].img4=true;
                this.swipe[3].img5=true;
                this.swipe[4].img1=true;
            }
            if(i==4){
                this.swipe[0].img1=true;
                this.swipe[1].img2=true;
                this.swipe[2].img3=true;
                this.swipe[3].img4=true;
                this.swipe[4].img5=true;
            }
            this.index++;
            if(i==4){
                this.index=0;
            }
            console.log(this.index);

        },
        chooseColor(index){
            this.color=index;
            leftDiv.section[0].text=`${this.arc[index].text} 已包含`;
            var lz=this.lunzi;
            for(var i in this.arc){
                var str = this.arc[i].bgc.replace(" colorclick","");
                this.arc[i].bgc=str;
            }
            this.arc[index].bgc+=" colorclick";
            for(var i in this.swipe){
                if(index==0){
                    if(lz==0){
                        this.swipe[i].url=this.car[0][i].url;
                    }else if(lz==1){
                        this.swipe[i].url=this.car[1][i].url;
                    }else if(lz==2){
                        this.swipe[i].url=this.car[2][i].url;
                    }else if(lz==3){
                        this.swipe[i].url=this.car[3][i].url;
                    }
                }
                if(index==1) {
                    if (lz == 0) {
                        this.swipe[i].url = this.car[4][i].url;
                    } else if (lz == 1) {
                        this.swipe[i].url = this.car[5][i].url;
                    } else if (lz == 2) {
                        this.swipe[i].url = this.car[6][i].url;
                    } else if (lz == 3) {
                        this.swipe[i].url = this.car[7][i].url;
                    }
                }
                if(index==2) {
                    if (lz == 0) {
                        this.swipe[i].url = this.car[8][i].url;
                    } else if (lz == 1) {
                        this.swipe[i].url = this.car[9][i].url;
                    } else if (lz == 2) {
                        this.swipe[i].url = this.car[10][i].url;
                    } else if (lz == 3) {
                        this.swipe[i].url = this.car[11][i].url;
                    }
                }
                if(index==3) {
                    if (lz == 0) {
                        this.swipe[i].url = this.car[12][i].url;
                    } else if (lz == 1) {
                        this.swipe[i].url = this.car[13][i].url;
                    } else if (lz == 2) {
                        this.swipe[i].url = this.car[14][i].url;
                    } else if (lz == 3) {
                        this.swipe[i].url = this.car[15][i].url;
                    }
                }
                if(index==4) {
                    if (lz == 0) {
                        this.swipe[i].url = this.car[16][i].url;
                    } else if (lz == 1) {
                        this.swipe[i].url = this.car[17][i].url;
                    } else if (lz == 2) {
                        this.swipe[i].url = this.car[18][i].url;
                    } else if (lz == 3) {
                        this.swipe[i].url = this.car[19][i].url;
                    }
                }
                if(index==5) {
                    if (lz == 0) {
                        this.swipe[i].url = this.car[20][i].url;
                    } else if (lz == 1) {
                        this.swipe[i].url = this.car[21][i].url;
                    } else if (lz == 2) {
                        this.swipe[i].url = this.car[22][i].url;
                    } else if (lz == 3) {
                        this.swipe[i].url = this.car[23][i].url;
                    }
                }
                if(index==6) {
                    if (lz == 0) {
                        this.swipe[i].url = this.car[24][i].url;
                    } else if (lz == 1) {
                        this.swipe[i].url = this.car[25][i].url;
                    } else if (lz == 2) {
                        this.swipe[i].url = this.car[26][i].url;
                    } else if (lz == 3) {
                        this.swipe[i].url = this.car[27][i].url;
                    }
                }
            }
        },
        chooselz(index){
            this.lunzi=index;
            var c=this.color;
            for(var demo of this.lz){
                demo.cla=""
            }
            console.log(index,c);
            leftDiv.section[1].text=`${this.lz[index].text} 已包含`;
            this.lz[index].cla="colorclick";
            for(var i in this.swipe){
                if(index==0){
                    if(c==0){
                        this.swipe[i].url=this.car[0][i].url;
                    }else if(c==1){
                        this.swipe[i].url=this.car[4][i].url;
                    }else if(c==2){
                        this.swipe[i].url=this.car[8][i].url;
                    }else if(c==3){
                        this.swipe[i].url=this.car[12][i].url;
                    }else if(c==4){
                        this.swipe[i].url=this.car[16][i].url;
                    }else if(c==5){
                        this.swipe[i].url=this.car[20][i].url;
                    }else if(c==6){
                        this.swipe[i].url=this.car[24][i].url;
                    }
                }
                if(index==1){
                    if(c==0){
                        this.swipe[i].url=this.car[1][i].url;
                    }else if(c==1){
                        this.swipe[i].url=this.car[5][i].url;
                    }else if(c==2){
                        this.swipe[i].url=this.car[9][i].url;
                    }else if(c==3){
                        this.swipe[i].url=this.car[13][i].url;
                    }else if(c==4){
                        this.swipe[i].url=this.car[17][i].url;
                    }else if(c==5){
                        this.swipe[i].url=this.car[21][i].url;
                    }else if(c==6){
                        this.swipe[i].url=this.car[25][i].url;
                    }
                }
                if(index==2){
                    if(c==0){
                        this.swipe[i].url=this.car[2][i].url;
                    }else if(c==1){
                        this.swipe[i].url=this.car[6][i].url;
                    }else if(c==2){
                        this.swipe[i].url=this.car[10][i].url;
                    }else if(c==3){
                        this.swipe[i].url=this.car[14][i].url;
                    }else if(c==4){
                        this.swipe[i].url=this.car[18][i].url;
                    }else if(c==5){
                        this.swipe[i].url=this.car[22][i].url;
                    }else if(c==6){
                        this.swipe[i].url=this.car[26][i].url;
                    }
                }
                if(index==3){
                    if(c==0){
                        this.swipe[i].url=this.car[3][i].url;
                    }else if(c==1){
                        this.swipe[i].url=this.car[7][i].url;
                    }else if(c==2){
                        this.swipe[i].url=this.car[11][i].url;
                    }else if(c==3){
                        this.swipe[i].url=this.car[15][i].url;
                    }else if(c==4){
                        this.swipe[i].url=this.car[19][i].url;
                    }else if(c==5){
                        this.swipe[i].url=this.car[23][i].url;
                    }else if(c==6){
                        this.swipe[i].url=this.car[27][i].url;
                    }
                }
            }
        },
        turnleft(){
            var i=this.index;
            for(msg of this.swipe){
                msg.img1=false;
                msg.img2=false;
                msg.img3=false;
                msg.img4=false;
                msg.img5=false;
            }
            if(i==0){
                this.swipe[3].img5=true;
                this.swipe[4].img1=true;
                this.swipe[0].img2=true;
                this.swipe[1].img3=true;
                this.swipe[2].img4=true;

            }
            if(i==1){
                this.swipe[3].img4=true;
                this.swipe[4].img5=true;
                this.swipe[0].img1=true;
                this.swipe[1].img2=true;
                this.swipe[2].img3=true;
            }
            if(i==2){
                this.swipe[3].img3=true;
                this.swipe[4].img4=true;
                this.swipe[0].img5=true;
                this.swipe[1].img1=true;
                this.swipe[2].img2=true;
            }
            if(i==3){
                this.swipe[3].img2=true;
                this.swipe[4].img3=true;
                this.swipe[0].img4=true;
                this.swipe[1].img5=true;
                this.swipe[2].img1=true;
            }
            if(i==4){
                this.swipe[3].img1=true;
                this.swipe[4].img2=true;
                this.swipe[0].img3=true;
                this.swipe[1].img4=true;
                this.swipe[2].img5=true;
            }
            this.index--;
            if(this.index==-1){
                this.index=4;
            }
        },
        chooseOver(index){
            if(this.over[index].div2==true){
                this.over[index].buy=!this.over[index].buy;
                if(this.over[index].buy==true){
                    if(leftDiv.section[3].text=="选装"){
                        leftDiv.section[3].text=this.over[index].name+" "+this.over[index].price+"<br>";
                    }else{
                        leftDiv.section[3].text=leftDiv.section[3].text+this.over[index].name+" "+this.over[index].price+"<br>";
                    }
                }else{
                    var str=this.over[index].name+" "+this.over[index].price+"<br>";
                    leftDiv.section[3].text=leftDiv.section[3].text.replace(str,"");
                    if(leftDiv.section[3].text==""){
                        leftDiv.section[3].text="选装";
                    }
                }
            }
        },
        tup(){
            for(divs of this.over){
                divs.div1=false;
                divs.div2=false;
                divs.div3=false;
                divs.div4=false;
                divs.div5=false;
                divs.div6=false;
                divs.dnone=false;
            }
            if(this.divIndex==0){
                this.over[1].div1=true;
                this.over[2].div2=true;
                this.over[3].div3=true;
                this.over[4].div4=true;
                this.over[5].div6=true;
                this.over[6].dnone=true;
                this.over[0].div5=true;
            }
            if(this.divIndex==1){
                this.over[2].div1=true;
                this.over[3].div2=true;
                this.over[4].div3=true;
                this.over[5].div4=true;
                this.over[6].div6=true;
                this.over[0].dnone=true;
                this.over[1].div5=true;
            }
            if(this.divIndex==2){
                this.over[3].div1=true;
                this.over[4].div2=true;
                this.over[5].div3=true;
                this.over[6].div4=true;
                this.over[0].div6=true;
                this.over[1].dnone=true;
                this.over[2].div5=true;
            }
            if(this.divIndex==3){
                this.over[4].div1=true;
                this.over[5].div2=true;
                this.over[6].div3=true;
                this.over[0].div4=true;
                this.over[1].div6=true;
                this.over[2].dnone=true;
                this.over[3].div5=true;
            }
            if(this.divIndex==4){
                this.over[5].div1=true;
                this.over[6].div2=true;
                this.over[0].div3=true;
                this.over[1].div4=true;
                this.over[2].div6=true;
                this.over[3].dnone=true;
                this.over[4].div5=true;
            }
            if(this.divIndex==5){
                this.over[6].div1=true;
                this.over[0].div2=true;
                this.over[1].div3=true;
                this.over[2].div4=true;
                this.over[3].div6=true;
                this.over[4].dnone=true;
                this.over[5].div5=true;
            }
            if(this.divIndex==6){
                this.over[0].div1=true;
                this.over[1].div2=true;
                this.over[2].div3=true;
                this.over[3].div4=true;
                this.over[4].div6=true;
                this.over[5].dnone=true;
                this.over[6].div5=true;
            }
            this.divIndex++
            if(this.divIndex==7){
                this.divIndex=0;
            }
        },
        tdown(){
            for(divs of this.over){
                divs.div1=false;
                divs.div2=false;
                divs.div3=false;
                divs.div4=false;
                divs.div5=false;
                divs.div6=false;
                divs.dnone=false;
            }
            if(this.divIndex==0){
                this.over[6].div1=true;
                this.over[0].div2=true;
                this.over[1].div3=true;
                this.over[2].div4=true;
                this.over[3].div6=true;
                this.over[4].dnone=true;
                this.over[5].div5=true;
            }
            if(this.divIndex==6){
                this.over[5].div1=true;
                this.over[6].div2=true;
                this.over[0].div3=true;
                this.over[1].div4=true;
                this.over[2].div6=true;
                this.over[3].dnone=true;
                this.over[4].div5=true;
            }
            if(this.divIndex==5){
                this.over[4].div1=true;
                this.over[5].div2=true;
                this.over[6].div3=true;
                this.over[0].div4=true;
                this.over[1].div6=true;
                this.over[2].dnone=true;
                this.over[3].div5=true;
            }
            if(this.divIndex==4){
                this.over[3].div1=true;
                this.over[4].div2=true;
                this.over[5].div3=true;
                this.over[6].div4=true;
                this.over[0].div6=true;
                this.over[1].dnone=true;
                this.over[2].div5=true;
            }
            if(this.divIndex==3){
                this.over[2].div1=true;
                this.over[3].div2=true;
                this.over[4].div3=true;
                this.over[5].div4=true;
                this.over[6].div6=true;
                this.over[0].dnone=true;
                this.over[1].div5=true;
            }
            if(this.divIndex==2){
                this.over[1].div1=true;
                this.over[2].div2=true;
                this.over[3].div3=true;
                this.over[4].div4=true;
                this.over[5].div6=true;
                this.over[6].dnone=true;
                this.over[0].div5=true;
            }
            if(this.divIndex==1){
                this.over[0].div1=true;
                this.over[1].div2=true;
                this.over[2].div3=true;
                this.over[3].div4=true;
                this.over[4].div6=true;
                this.over[5].dnone=true;
                this.over[6].div5=true;
            }
            this.divIndex--
            if(this.divIndex==-1){
                this.divIndex=6;
            }
        },
        chooseqh(index){
            this.innerqh=index;
            this.innerchoose();
        },
        chooseInnerColor(index){
            this.inner=index;
            leftDiv.section[2].text=this.hidtext3[index].text+" 已包含";
            for(msg of this.hidtext3){
                msg.imgb=false;
                msg.imgs=true;
                msg.rgba1=false;
            }
            this.hidtext3[index].imgb=true;
            this.hidtext3[index].imgs=false;
            this.hidtext3[index].rgba1=true;
            this.innerchoose();
        },
        tinnerleft(){
            this.innerfx++;
            if(this.innerfx==4){
                this.innerfx=0;
            }
            this.innerchoose();
        },
        tinnerright(){
            this.innerfx--;
            if(this.innerfx==-1){
                this.innerfx=3;
            }
            this.innerchoose();
        },
        innerchoose(){
            var c=this.inner;
            var qh=this.innerqh;
            var fx=this.innerfx;
            var num=(c)*8+(qh)*4+fx;
            this.innerImg.url=this.innerImglist[num].url;
        }
    }
})
var indexall=0;
var scrollFunc=function(e) {
    e = e || window.event;
    if (e.wheelDelta) {//IE/Opera/Chrome
        if (e.wheelDelta > 0) {
            indexall--;
            if(indexall==-1)
            indexall=0;
            leftDiv.chooseDemo(indexall);
        }else{
            indexall++;
            if(indexall==4)
                indexall=3
            leftDiv.chooseDemo(indexall);
        }
    }
}
if(document.addEventListener){
    document.addEventListener('DOMMouseScroll',scrollFunc,false);
}
window.onmousewheel=scrollFunc;

var over =document.getElementById("over")
var scrollFunc1=function(e) {
    e = e || window.event;
    e.stopPropagation();
    if (e.wheelDelta) {//IE/Opera/Chrome
        if (e.wheelDelta > 0) {
            rightDiv.tup();
        }else{
            rightDiv.tdown();
        }
    }
}
over.onmousewheel=scrollFunc1;
$(".innerimg").mouseenter(function () {
    $(".hiddiv").removeClass("opacity0");
})
$(".innerimg").mouseleave(function () {
    $(".hiddiv").addClass("opacity0");
})
$(".hiddiv").mouseenter(function () {
    $(".hiddiv").removeClass("opacity0");
})