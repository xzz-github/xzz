<template>
    <div class="new">
        <div class="new-1">
            <table></table>
            <div class="new-1-text">
                <p>{{texts[0]}}</p>
                <p>{{texts[1]}}</p>
            </div>
        </div>
        <div class="new-2">
            <div class="new-2-a">
                <ul>
                    <li v-for="(item,a) in news" :key="a">
                        <div class="n-2-a">
                            <div class="n-2-t">
                                <p class="p1">{{item.p1}}</p>
                                <div class="kuang">
                                    <div class="dl">
                                        <p class="p2">{{item.p2}}
                                        </p>
                                        <p class="p3">{{item.p3}}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="n-2-i">
                                <div class="n-img">
                                    <img :src="item.img">
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      texts: ["新闻与事件", "news and events"],
      news: [
        {
          p1: "十大最佳餐厅",
          p2:
            "对那些遵循古老饮食或者是不想摄入过多有筋面粉的人来说，这些极具创意的比萨面饼菜谱真是极好的。这些面饼一些不含面筋质，另一些完全不含谷物质，并且这些面饼都是用诸如菜花，萝卜等原材料制作而成的…",
          p3: "2018年03月06日 10:00",
          img:
            "//bk.image.styleweb.com.cn/2018/3/6/_jef0df26.jpg?imageView2/2/w/1223/q/100"
        },
        {
          p1: "厨师的选择：全新的味道",
          p2:
            "许多人会避免食用有筋面粉他们的健康也因此有所提高。这里有一个很棒的无筋比萨饼配方，在保留有筋风味的基础上，还别具风味，并且它还不会在你的肠子里结块…",
          p3: "2018年03月06日 10:00",
          img:
            "//bk.image.styleweb.com.cn/2018/3/6/_jef0cuup.jpg?imageView2/2/w/1223/q/100"
        },
        {
          p1: "与朋友见面的最佳地点",
          p2:
            "比萨是发源于意大利，但是成功在美国推广出来的一种营养和美味的食品。比萨的种类其实繁多，但是如果大致分类，就分为美式披萨和意式披萨，美式披萨一般都是馅料比较丰…",
          p3: "2018年03月06日 10:00",
          img:
            "//bk.image.styleweb.com.cn/2018/3/6/_jef0c9ty.jpg?imageView2/2/w/1223/q/100"
        },
        {
          p1: "新的帕尼尼现货是开放的",
          p2:
            "意式披萨则较为简单，一张意式饼底上，可能只要几片番茄，几块新鲜奶酪等，但是他对披萨厨师们，也是一种考验，它的面团发酵，烘烤。馅料的搭…",
          p3: "2018年03月06日 10:00",
          img:
            "//bk.image.styleweb.com.cn/2018/3/6/_jef0bofh.jpg?imageView2/2/w/1223/q/100"
        }
      ]
    };
  },
  methods:{
  }
};
</script>

<style scoped>
ul {
  list-style: none;
}
.new{
    font: 14px/1.5 'Helvetica Neue', 'Helvetica', "Hiragino Sans GB",Arial,"Microsoft YaHei", "微软雅黑", "STHeiti", "WenQuanYi Micro Hei",'PingFang SC', SimSun, sans-serif;
}
.new .new-1 {
  height: 600px;
  background-size: cover;
  background-image: url("http://bk.image.styleweb.com.cn/2017/11/8/13039_j9qintho.jpg?imageMogr2/thumbnail/2000x2000/q/100");
  background-attachment: fixed;
}
.new .new-1 .new-1-text {
  margin-top: 200px;
}
.new .new-1 p:first-child {
  font-size: 36px;
  color: #fff;
}
.new .new-1 p:nth-child(2) {
  margin-top: 6px;
  font-size: 16px;
  font-family: "Microsoft YaHei", 微软雅黑, MicrosoftJhengHei, 华文细黑, STHeiti,
    MingLiu;
  color: #fff;
}
.new-2 .new-2-a {
  width: 1200px;
  margin: auto;
  padding: 80px 0;
}
.new-2 .new-2-a li {
  border-bottom: 1px solid #ccc;
  padding: 40px 0;
}
.new-2 .new-2-a .n-2-a {
  display: flex;
}
.new-2 .new-2-a .n-2-t {
  width: 70%;
  text-align: left;
}
.new-2 .new-2-a .n-2-t .p1 {
  font-size: 18px;
  margin-bottom: 8px;
}
.new-2 .new-2-a .n-2-t .p2 {
  font-size: 14px;
  margin-bottom: 8px;
}
.new-2 .new-2-a .n-2-t .p3 {
  color: #888;
  font-size: 13px;
}
.new-2 .new-2-a .n-2-i {
  width: 30%;
}
.new-2 .new-2-a .n-2-i .n-img {
  width: 80%;
  float: right;
}
.new-2 .new-2-a .n-2-i .n-img img {
  width: 100%;
  height: 177px;
}
.dl{
    transition: all .8s;
}
.new-2 .new-2-a li:hover .dl{
    transform: translateX(20px);
}
.new-2 .new-2-a li .kuang{
    height:90%;
    border-left: rgba(0,0,0,0);
    transition: all 1s;
}
.new-2 .new-2-a li:hover .kuang{
    /* height: 90% !important; */
    /* opacity: 1; */
    border-left: 1px solid #888;
}

</style>

