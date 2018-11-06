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
                 
               </div>
           </div>
       </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      texts: ["菜单", "menu"]
    };
  }
};
</script>

<style scoped>
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
</style>
