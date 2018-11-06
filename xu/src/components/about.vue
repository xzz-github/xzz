<template>
    <div class="about">
        <div class="about-1">
            <table></table>
            <div class="about-1-text">
                <p>{{texts[0]}}</p>
                <p>{{texts[1]}}</p>
            </div>
        </div>
        <div class="about-2">
          <table></table>
          <div class="about-2-title">
            <p>
              {{texts[0]}}
            </p>
            <p>
              {{texts[2]}}
            </p>
          </div>
          <div class="about-2-text"> 
            <p>{{texts[3]}}</p>
            <p>{{texts[4]}}</p>
            <p>{{texts[5]}}</p>
          </div>
          <div class="about-2-content">
            <div class="a-2-c">
              <div class="a-2-c-i">
                <img :src="abouts[0].img">
              </div>
              <div class="a-2-c-t a-2-c-r">
                <div>
                  {{abouts[0].text}}
                </div>
              </div>
            </div>
            <div class="hr">
            </div>
            <div class="a-2-c">
              <div class="a-2-c-t a-2-c-l">
                <div>
                  {{abouts[1].text}}
                </div>
              </div>
              <div class="a-2-c-i">
                <img :src="abouts[1].img">
              </div>
              
            </div>
          </div>
        </div>
        <div class="about-3">
          <div class="a-3-t">
            <p class="a-3-t1">{{texts[6]}}</p>
            <p class="a-3-t2">{{texts[7]}}</p>
            <p class="a-3-t3">{{texts[8]}}</p>
            <p class="a-3-t3">{{texts[9]}}</p>
          </div>
          <div class="about-3-btn">
            <router-link to="/news" class="a-3-b">
              <p>ORDER NOW</p>
            </router-link>
          </div>
        </div>
        <div class="about-4">
          <table></table>
          <div class="about-4-all">
            <div class="a-4-i">
              <div class="a-4-img">
                <img src="http://bk.image.styleweb.com.cn/2017/11/22/13039_jaauljm4.jpg?imageView2/2/w/583/q/100">
              </div>
            </div>
            <div class="a-4-t">
              <div class="a-4-t1">
                <img src="http://bk.image.styleweb.com.cn/2017/11/8/13039_j9qig91x.png?imageView2/2/w/1800"> 
              </div>
              <div class="a-4-t2">
                <p class="a-4-t-p1">OUR MASTER CHEF</p>
                <p class="a-4-t-p2">Adam Lambert</p>
                <p class="a-4-t-p3">{{abouts[0].text}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="fixed-img">
          <img :src="fixed[0]">
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      texts: [
        "关于我们",
        "about us",
        "Family Cafe & Pizzeria",
        "我们使用的主要比萨饼制作技术为意大利手抛比萨饼制作技术。在饼底的成型过程中有手抛饼底的工艺。",
        "比萨饼师傅用手将饼底抛向空中，利用离心力将饼底旋转到需要的尺寸,",
        "此工艺观赏性非常强.",
        "做你自己的比萨饼",
        "家庭咖啡厅和比萨饼店",
        "古老的意大利披萨,那浓郁的香味，让你感受到家的味道",
        "来做你梦想中的披萨吧"
      ],
      fixed: [
        "http://bk.image.styleweb.com.cn/2017/11/11/13039_j9v20t8j.jpg?imageMogr2/thumbnail/2000x2000/q/100"
      ],
      abouts: [
        {
          img:
            "http://bk.image.styleweb.com.cn/2018/2/28/13039_je6q4dsg.jpg?imageView2/2/w/1166/q/100",
          text:
            "The main pizza making technology we use is Italy hand throwing pizza making technology. Pizza chefs throw the bottom of the cake into the air by hand and rotate the bottom of the cake to the desired size by centrifugal force. This process is very ornamental."
        },
        {
          img:
            "http://bk.image.styleweb.com.cn/2018/2/28/13039_je6q7ny9.jpg?imageView2/2/w/1166/q/100",
          text:
            "The main pizza making technology we use is Italy hand throwing pizza making technology. Pizza chefs throw the bottom of the cake into the air by hand and rotate the bottom of the cake to the desired size by centrifugal force. This process is very ornamental."
        }
      ]
    };
  }
};
</script>

<style scoped>
.fixed-img {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
.about .about-1 {
  height: 600px;
  background-image: url("http://bk.image.styleweb.com.cn/2017/11/22/13039_jaatpupm.jpg?imageMogr2/thumbnail/2000x2000/q/100");
  background-size: cover;
}
.about .about-1 .about-1-text {
  margin-top: 200px;
}
.about .about-1 p:first-child {
  font-size: 36px;
  color: #fff;
}
.about .about-1 p:nth-child(2) {
  margin-top: 6px;
  font-size: 16px;
  font-family: "Microsoft YaHei", 微软雅黑, MicrosoftJhengHei, 华文细黑, STHeiti,
    MingLiu;
  color: #fff;
}
.about .about-2 {
  height: 1100px;
  background-image: url("http://bk.image.styleweb.com.cn/2017/11/8/13039_j9qintho.jpg?imageMogr2/thumbnail/2000x2000/q/100");
  background-size: cover;
}
.about .about-2 .about-2-title {
  margin-top: 120px;
}
.about .about-2 .about-2-title p:first-child {
  font-size: 28px;
  color: rgb(255, 255, 255);
}
.about .about-2 .about-2-title p:nth-child(2) {
  font-size: 28px;
  margin: 20px 0;
  font-family: Georgia, serif;
  color: rgb(207, 223, 90);
}
.about .about-2-text {
  font-size: 16px;
  color: #fff;
  margin-top: 50px;
}
.about .about-2-text p {
  margin: 5px 0;
}
.about .about-2-content .a-2-c {
  margin: 60px auto;
  width: 1200px;
  display: flex;
}
.about .a-2-c .a-2-c-t {
  font-size: 18px;
  color: #fff;
  text-align: left;
}
.about .a-2-c .a-2-c-t > div {
  width: 600px;
  margin-top: 40px;
}
.about .a-2-c .a-2-c-r > div {
  margin-left: 40px;
}
.about .a-2-c .a-2-c-l > div {
  margin-right: 40px;
}
.about .about-2-content .hr {
  width: 1200px;
  margin: auto;
  border-bottom: 1px dashed white;
}
.about .about-3 {
  height: 500px;
  background-color: rgb(0, 0, 0, 0);
}
.about .about-3 .a-3-t {
  margin-top: 130px;
}
.about-3 .a-3-t .a-3-t1 {
  font-size: 26px;
  color: #fff;
  margin-bottom: 30px;
}
.about-3 .a-3-t .a-3-t2 {
  color: rgb(239, 239, 239);
  font-size: 18px;
  margin-bottom: 35px;
}
.about-3 .a-3-t .a-3-t3 {
  color: rgb(221, 221, 221);
  margin-bottom: 5px;
  font-size: 14px;
}
.about-3 .about-3-btn {
  margin-top: 60px;
}
.about-3 .about-3-btn .a-3-b {
  text-decoration: none;
}
.about-3 .about-3-btn p {
  margin: auto;
  color: rgb(255, 255, 255);
  background-color: rgb(105, 202, 114);
  border-radius: 30px;
  width: 150px;
  padding: 14px 0;
}
.about-3 .about-3-btn p:hover {
  background-color: rgba(105, 202, 114, 0.7);
}
.about-4 {
  background-image: url("http://bk.image.styleweb.com.cn/2017/11/8/13039_j9qintho.jpg?imageMogr2/thumbnail/2000x2000/q/100");
  height: 860px;
}
.about-4 .about-4-all {
  width: 1200px;
  margin: auto;
  margin-top: 120px;
  display: flex;
}
.about-4 .about-4-all .a-4-i {
  width: 50%;
}
.about-4 .about-4-all .a-4-i .a-4-img {
  width: 80%;
  margin: auto;
}
.about-4 .about-4-all .a-4-i .a-4-img img {
  width: 100%;
}
.about-4 .about-4-all .a-4-t {
  width: 50%;
}
.about-4 .about-4-all .a-4-t .a-4-t2 {
  margin-top: 20px;
}
.about-4 .about-4-all .a-4-t .a-4-t2 .a-4-t-p1 {
  color: rgb(255, 255, 255);
  font-size: 60px;
  font-family: Impact, Charcoal, sans-serif;
  line-height: 90px;
}
.about-4 .about-4-all .a-4-t .a-4-t2 .a-4-t-p2 {
  color: rgb(207, 223, 90);
  font-size: 30px;
  font-family: Georgia, serif;
   line-height: 45px;
}
.about-4 .about-4-all .a-4-t .a-4-t2 .a-4-t-p3 {
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-align: left;
  margin-top: 14px;
}
</style>
