<template>
    <div class="foot">
        <table></table>
        <div class="a">

        </div>
        <div class="foot-img">
            <img :src="img">
        </div>
        <div class="foot-text">
            <div class="foot-text-a">
                <p>
                <ul>
                    <li v-for="(item,index) in texts" :key="index">
                        <a href="#">{{item.tag}}</a>
                    </li>
                </ul>
                </p>
            </div>
            
        </div>
       
        <div class="foot-content"> 
            <div class="foot-hr">
            </div>
            <span>{{content}}</span>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      texts: [
        { tag: "首页  |" },
        { tag: "关于我们  |" },
        { tag: "菜谱  |" },
        { tag: "新闻  |" },
        { tag: "店" }
      ],
      img:
        "http://bk.image.styleweb.com.cn/2017/11/9/13039_j9ruu5i7.png?imageView2/2/w/1800",
      content: "© 2018 Pizza Restaurant"
    };
  }
};
</script>

<style scoped>
.foot {
  height:350px;
  position: relative;
  background-color: rgb(33, 33, 33);
}
.foot-img {
  margin-top: 50px;
}
.foot .foot-img img {
  width: 90px;
  margin: 5px auto;
  display: block;
  float: none;
  max-width: 100%;
  max-height: initial;
}
.foot-text {
  margin: 40px 0;
}
.foot-text .foot-text-a {
  width: 373px;
  margin: auto;
}
.foot-text ul {
  list-style: none;
  display: flex;
}
.foot-text ul li {
  margin-right: 20px;
}
.foot-text ul li a {
  text-decoration: none;
  color: #fff;
  letter-spacing: 2px;
  font-size: 14px;
}
.foot-hr {
  margin: auto;
  margin-bottom: 30px;
  width: 1200px;
  border-bottom: 1px dashed rgb(68, 68, 68);
}
.foot-content {
  margin: 20px;
}
.foot-content span {
  color: rgb(187, 187, 187);
  font-size: 14px;
}
</style>
