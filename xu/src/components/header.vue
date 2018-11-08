<template>
    <div class="header">
        <div class="row">
            <div class="header-img">
                <img src="//bk.image.styleweb.com.cn/2018/3/10/13039_jekqnsts.png" >
            </div>
            <div class="header-title">
                <ul>
                    <li><router-link to="/">首页</router-link></li>
                    <li><router-link to="/about">关于我们</router-link></li>
                    <li class="li-sub">
                        <router-link to="/menu/0">菜谱 v</router-link>
                        <ul>
                            <li><router-link :to="{path:'/menu/0'}"><span>比萨</span></router-link></li>
                            <li><router-link :to="{path:'/menu/1'}"><span>小吃</span></router-link></li>
                            <li><router-link :to="{path:'/menu/2'}"><span>饮料</span></router-link></li>
                            <li><router-link :to="{path:'/menu/3'}"><span>甜品</span></router-link></li>
                        </ul>   
                    </li>
                    <li><router-link to="/news">新闻与事件</router-link></li>
                    <li><router-link to="/relation">联系</router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
    };
  }
};
</script>

<style scoped>
.header {
  position: relative;
  width: 100%;
  padding: 8px 0;
  background-color: rgba(19, 17, 17, 0.91);
  z-index: 5;
}
.row {
  max-width: 1200px;
  width: 100%;
  margin: auto;
  display: flex;
}
.row > div {
  width: 50%;
  padding: 8px;
}
.header-img {
  height: 64px;
  text-align: left;
  vertical-align: middle;
}
.header-title {
  font-size: 16px;
}
.header-title > ul {
  margin: 0;
  margin-top: 5px;
  list-style: none;
  display: flex;
}
.header-title > ul > li {
  position: relative;
}
.header-title > ul > li > a {
  padding: 16px 22px;
  display: block;
  text-align: center;
  text-decoration: none;
  color:rgba(255,255,255,.8)
}
.header-title > ul > li:hover > a {
  color: rgb(255, 255, 255);
}
.li-sub ul {
  list-style: none;
  z-index: 1;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 4px;
  color: #666;
  font-size: 14px;
  padding: 0;
  margin: 0;
  height: auto;
  opacity: 0;
  transition: all 1s;
}
.li-sub ul li {
  text-align: left;
  min-width: 140px;
  height: 0;
  line-height: 0;
  position: relative;
  transition: all 1s;
}
.li-sub:hover ul {
  opacity: 1;
}
.li-sub:hover ul li {
  height: 38px;
  line-height: 38px;
}
.li-sub ul li :hover {
  background: #ededed;
}
.li-sub ul li a {
  color: inherit;
  padding: 0 18px;
  display: block;
  text-decoration: none;
}
</style>
