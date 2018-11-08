<template>
    <div class="menu">
       <div class="menu-1">
           <table></table>
            <div class="menu-1-text">
                <p>{{texts[0]}}</p>
                <p>{{texts[1]}}</p>
            </div>
       </div>
       <div class="menu-2">
           <div class="menu-2-btn">
               <div class="m-2-b">
                  <ul>
                    <li v-for="(list,index) in menus" :key="index" @click="ors(index)" ><span :class="{green:changeC==list.num}">{{list.text}}</span></li>
                  </ul>
               </div>
               <div class="m-2-b-i1" :class="{change:changeC==0}">
                 <ul>
                  <li v-for="(list,menu1) in menu1" :key="menu1"> 
                      <div class="i1">
                        <img :src="list.img">
                        <div class="i1-t" >
                          <p>{{list.p1}}</p>
                          <p>{{list.p2}}</p>
                        </div>
                      </div>
                   </li>
                 </ul>
               </div>
               <div class="m-2-b-i1"  :class="{change:changeC==1}">
                 <ul>
                  <li v-for="(list,menu2) in menu2" :key="menu2"> 
                      <div class="i1">
                        <img :src="list.img">
                        <div class="i1-t">
                          <p>{{list.p1}}</p>
                          <p>{{list.p2}}</p>
                        </div>
                      </div>
                   </li>
                 </ul>
               </div>
               <div class="m-2-b-i1"  :class="{change:changeC==2}">
                 <ul>
                  <li v-for="(list,menu3) in menu3" :key="menu3"> 
                      <div class="i1">
                        <img :src="list.img">
                        <div class="i1-t">
                          <p>{{list.p1}}</p>
                          <p>{{list.p2}}</p>
                        </div>
                      </div>
                   </li>
                 </ul>
               </div>
               <div class="m-2-b-i1"  :class="{change:changeC==3}">
                 <ul>
                  <li v-for="(list,menu4) in menu4" :key="menu4"> 
                      <div class="i1">
                        <img :src="list.img">
                        <div class="i1-t">
                          <p>{{list.p1}}</p>
                          <p>{{list.p2}}</p>
                        </div>
                      </div>
                   </li>
                 </ul>
               </div>
           </div>
       </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      show:false,
      changeC:0,
      texts: ["菜单", "menu"],
      menus: [
        {
          text: "披萨",num:'0'
        },
        {
          text: "小吃",num:'1'
        },
        {
          text: "饮料",num:'2'
        },
        {
          text: "甜品",num:'3'
        }
      ],
      menu1:[
        {img:'//bk.image.styleweb.com.cn/2018/3/5/_jee2zyfe.jpg?imageView2/2/w/828/q/100',p1:'纽约式披萨',p2:'匹萨，是一种发源于意大利的食品，在全球颇受欢迎。比萨饼的通常做法是用发…'},
        {img:'//bk.image.styleweb.com.cn/2018/3/5/_jee2z9im.jpg?imageView2/2/w/828/q/100',p1:'加利福尼亚式披萨',p2:'比萨（Pizza）又译作披萨饼、匹萨，是一种发源于意大利的食品，在全球颇受…'},
        {img:'//bk.image.styleweb.com.cn/2018/3/5/_jee2ylaw.jpg?imageView2/2/w/828/q/100',p1:'外带焙烤式披萨',p2:'比萨（Pizza）又译作披萨饼、匹萨，是一种发源于意大利的食品，在全球颇受…'},
        {img:'//bk.image.styleweb.com.cn/2018/3/5/_jee2xwsd.jpg?imageView2/2/w/828/q/100',p1:'薄脆型披萨',p2:'匹萨，是一种发源于意大利的食品，在全球颇受欢迎。比萨饼的通常做法是用发…'},
        {img:'//bk.image.styleweb.com.cn/2018/3/5/_jee2xa9n.jpg?imageView2/2/w/828/q/100',p1:'法式披萨',p2:'匹萨，是一种发源于意大利的食品，在全球颇受欢迎。比萨饼的通常做法是用发…'},
      ],
      menu2:[
        {img:'//bk.image.styleweb.com.cn/2018/3/5/_jee33aws.png?imageView2/2/w/828/q/100',p1:'泡椒鸭血酸辣粉',p2:'滑嫩的鸭血浸泡在，经典的泡椒高汤之中，吃了一碗还想下…'},
        {img:'//bk.image.styleweb.com.cn/2018/3/5/_jee32k4b.jpg?imageView2/2/w/828/q/100',p1:'肉末拌面',p2:'浇上鲜美的酱料，再配上劲道的辣椒，啊 要的就是这个…'},
        {img:'//bk.image.styleweb.com.cn/2018/3/5/_jee31rc3.jpg?imageView2/2/w/828/q/100',p1:'杂酱酸辣粉',p2:'上乘原料 经典配方，独特工艺 麻辣鲜香，令人垂涎欲滴的经典山城味，行…'},
        {img:'//bk.image.styleweb.com.cn/2018/3/5/_jee30ygm.jpg?imageView2/2/w/828/q/100',p1:'三鲜烩饭',p2:'味鲜汁浓，优秀的食材,极致的美味带来极致的体验'},
      ],
      menu3:[
        {img:'http://pics.sc.chinaz.com/files/pic/pic9/201610/apic23661.jpg',p1:'可口可乐',p2:'肥宅快乐水，肥宅们的最爱，冷藏后更好喝哦！'},
        {img:'http://bpic.588ku.com/element_origin_min_pic/18/06/10/b69431c75bd62ee181dcba56597c90a0.jpg',p1:'雪花啤酒',p2:'中国雪花牌啤酒，是世界销量第一的啤酒品牌。'}
      ],
      menu4:[
        {img:'http://bpic.588ku.com/element_origin_min_pic/18/06/09/cb52d631cf2015794a82b54e4e2cc4f1.jpg',p1:'哈更达斯',p2:'哈根达斯提倡“尽情尽享，尽善尽美”的生活方式，鼓励人们追求高品质的生活享受。'},
        {img:'http://bpic.588ku.com/element_origin_min_pic/18/06/09/bbef111d205ffd2f47d979b8aee776b1.jpg',p1:'抹茶',p2:'抹茶（中国古时称作末茶）起源于中国隋唐，将春天的茶叶的嫩叶，用蒸汽杀青后，做成饼茶（团茶）保存。'},
        {img:'https://bpic.588ku.com/element_pic/16/10/22/dab04217d3f082bc5a39f8b96e0c6127.jpg!/fw/254/quality/90/unsharp/true/compress/true',p1:'焦糖玛奇朵',p2:'焦糖玛奇朵是在香浓热牛奶上加入浓缩咖啡、香草，再淋上纯正焦糖而制成的饮品，融合三种不同口味。'},
      ]
    };
  },
  methods:{
    ors(index){
      this.changeC=index;
    }
  },
  created(){
    var ch=this.$route.params.id;
    this.changeC=ch;
    console.log(this.changeC);
    // console.log(this.$route.query.changeC)
  }
};
</script>

<style scoped>
div,
ul,
li {
  padding: 0;
  margin: 0;
}
ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
}
.menu .menu-1 {
  height: 600px;
  background-image: url("http://bk.image.styleweb.com.cn/2017/11/11/13039_j9v1ob0t.jpg?imageMogr2/thumbnail/2000x2000/q/100");
  background-size: cover;
}
.menu .menu-1 .menu-1-text {
  margin-top: 200px;
}
.menu .menu-1 p:first-child {
  font-size: 36px;
  color: #fff;
}
.menu .menu-1 p:nth-child(2) {
  margin-top: 6px;
  font-size: 16px;
  font-family: "Microsoft YaHei", 微软雅黑, MicrosoftJhengHei, 华文细黑, STHeiti,
    MingLiu;
  color: #fff;
}
.menu-2 {
  margin-top: 80px;
}
.menu-2 .m-2-b {
  width: 400px;
  margin: auto;
}
.menu-2 .m-2-b ul li {
  width: 100px;
  line-height: 36px;
}
.menu-2 .m-2-b ul li span {
  border: 1px solid #ccc;
  padding: 8px 20px;
  transition: all 0.3s;
  cursor: pointer;
}
.menu-2 .m-2-b ul li span:hover {
  background-color: #62b92e;
  color: white;
  border-color: #62b92e;
}
.green{
  background-color: #62b92e;
  color: white;
  border-color: #62b92e;
}
.menu-2 .menu-2-btn {
  width: 1200px;
  margin: auto;
}
.menu-2 .menu-2-btn .m-2-b-i1 {                                                                                 
  margin-top: 60px;
  display: none;
  height: 600px;
  margin-bottom: 60px;
}
.menu-2 .menu-2-btn .m-2-b-i1 li {
  width: 300px;
  height: 300px;
}
.menu-2 .menu-2-btn .m-2-b-i1 li .i1 {
  width: 276px;
  height: 276px;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0px 0px 8px 7px rgb(237, 237, 237);
  margin-top: 12px;
  overflow: hidden;
  position: relative;
}
.menu-2 .menu-2-btn .m-2-b-i1 li .i1:hover img {
  transform: scale(1.2);
}
.menu-2 .menu-2-btn .m-2-b-i1 li .i1 img {
  width: 100%;
  transition: all 1s;
}
.menu-2 .menu-2-btn .m-2-b-i1 li .i1 .i1-t {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: rgba(255, 255, 255, 0.9);
  padding: 8px 10px;
}
.menu-2 .menu-2-btn .m-2-b-i1 li .i1 .i1-t p:nth-child(2) {
  font-size: 14px;
  line-height: 1.5em;
  text-align: left;
  color: rgb(238, 238, 238);
}
.change{
  display: block !important;
}
</style>
