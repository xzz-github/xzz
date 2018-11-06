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
                    <li v-for="(list,index) in menus" :key="index" @click="ors(a)"><span>{{list.text}}</span></li>
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
      texts: ["菜单", "menu"],
      menus:[
        {
          text: "披萨"
        },
        {
          text: "小吃"
        },
        {
          text: "饮料"
        },
        {
          text: "甜品"
        }
        ]
    };
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
.menu-2{
  margin-top: 80px;
}
.menu-2 .m-2-b{
  width: 400px;
  margin: auto;
}
.menu-2 .m-2-b ul li{
  width: 100px;
  line-height: 36px;
}
.menu-2 .m-2-b ul li span{
  border: 1px solid #ccc;
    padding: 8px 20px;
    transition: all 0.3s;
    cursor: pointer;
}
.menu-2 .m-2-b ul li span:hover{
      background-color: #62b92e;
    color: white;
    border-color: #62b92e;
}

</style>
