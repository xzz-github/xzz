<template>
    <div class="relation">
        <div class="rel-1">
            <table></table>
            <div class="rel-1-text">
                <p>{{texts[0]}}</p>
                <p>{{texts[1]}}</p>
            </div>
        </div>
        <div class="rel-2">
            <div class="rel-con">
                <div class="rel-con-l">
                    <p>———</p>
                    <p>联系我们的方式</p>
                    <p>我们将期待为您送上满意的服务！</p>
                </div>
                <div class="rel-con-r">
                    <ul>
                        <li v-for="(item,a) in contacts" :key="a">
                            <div class="rel-con-r1">
                                <img :src="item.img">
                            </div>
                            <div class="rel-con-r2">
                                {{item.text}}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="rel-3">
            <p>订餐表单</p>
            <p>网上订餐 可享受8折优惠</p>
            <form class="rel-3-form">
                <input class="form-text" type="text" placeholder="姓名" v-model="name">
                <input class="form-text" type="text" placeholder="请输入手机号码" v-model="tel">
                <textarea class="form-text form-textarea" type="text" placeholder="留言"/>
                <input class="bg-green" type="submit">
                <div class="yz">
                  <yz v-on:confirmSuccess="confirmSuccess"></yz>
                </div>
            </form>
            
        </div>
        
        
    </div>
</template>

<script>
import yz from '@/components/yz'
export default {
  data() {
    return {
      texts: ["联系", "contact"],
      contacts: [
        {
          img:
            "http://bk.image.styleweb.com.cn/2017/2/8/3917_iywtv090.png?imageView2/2/w/204/q/100",
          text: "电话 : 010-00000000"
        },
        {
          img:
            "http://bk.image.styleweb.com.cn/2017/2/8/3917_iywtv09h.png?imageView2/2/w/204/q/100",
          text: "邮箱 :0100000"
        },
        {
          img:
            "http://bk.image.styleweb.com.cn/2017/2/8/3917_iywtv09e.png?imageView2/2/w/204/q/100",
          text: "手机 :010-00000000"
        },
        {
          img:
            "http://bk.image.styleweb.com.cn/2017/2/8/3917_iywtv09f.png?imageView2/2/w/204/q/100",
          text: "地址 : 中国互联网省域名市网站区666号"
        }
      ],
      sf:'',
      name:'',
      tel:''
    };
  }, 
  components: {
    "yz":yz
  },
  methods:{
    
    confirmSuccess:function(confirmSuccess){
      this.sf=confirmSuccess;
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul {
  list-style: none;
}
.relation {
  font: 14px/1.5 "Helvetica Neue", "Helvetica", "Hiragino Sans GB", Arial,
    "Microsoft YaHei", "微软雅黑", "STHeiti", "WenQuanYi Micro Hei",
    "PingFang SC", SimSun, sans-serif;
}
.relation .rel-1 {
  height: 600px;
  background-size: cover;
  background-image: url("http://bk.image.styleweb.com.cn/2017/11/8/13039_j9qintho.jpg?imageMogr2/thumbnail/2000x2000/q/100");
  background-attachment: fixed;
}
.relation .rel-1 .rel-1-text {
  margin-top: 200px;
}
.relation .rel-1 p:first-child {
  font-size: 36px;
  color: #fff;
}
.relation .rel-1 p:nth-child(2) {
  margin-top: 6px;
  font-size: 16px;
  font-family: "Microsoft YaHei", 微软雅黑, MicrosoftJhengHei, 华文细黑, STHeiti,
    MingLiu;
  color: #fff;
}
.rel-2 .rel-con {
  width: 1200px;
  margin: auto;
  display: flex;
  margin-top: 80px;
  text-align: left;
}
.rel-2 .rel-con .rel-con-l {
  width: 45%;
}
.rel-2 .rel-con .rel-con-l p:first-child {
  margin: 8px 0;
}
.rel-2 .rel-con .rel-con-l p:nth-child(2) {
  font-size: 22px;
  color: rgba(31, 37, 38, 0.75);
  margin: 8px 0;
}
.rel-2 .rel-con .rel-con-l p:nth-child(3) {
  font-size: 16px;
}
.rel-2 .rel-con .rel-con-r {
  width: 55%;
  color: rgba(31, 37, 38, 0.75);
}
.rel-2 .rel-con .rel-con-r li {
  display: flex;
  padding: 12px;
}
.rel-2 .rel-con .rel-con-r li .rel-con-r1 {
  display: inline-block;
  width: 30px;
}
.rel-2 .rel-con .rel-con-r li .rel-con-r1 img {
  width: 100%;
}
.rel-2 .rel-con .rel-con-r li .rel-con-r2 {
  font-size: 16px;
  margin-left: 30px;
}
.rel-3 p:first-child {
  font-size: 24px;
  margin-bottom: 9px;
  margin-top: 60px;
}
.rel-3 p:nth-child(2) {
  font-size: 16px;
}
.rel-3 .rel-3-form {
  min-height: 32px;
  min-width: 120px;
  max-width: 769px;
  margin: 0 auto 80px;
  color: rgba(31, 37, 38, 0.75);
}
.rel-3 .rel-3-form .form-text {
  border: 1px solid #e2dfdf;
  display: block;
  width: 100%;
  padding: 8px 10px;
  min-height: 32px;
  min-width: 120px;
  margin: 20px 0;
}
.rel-3 .rel-3-form .form-textarea {
  height: 60px;
}
.rel-3 .rel-3-form .bg-green {
  background-color: #13ae47 !important;
  cursor: pointer;
  color: #fff;
  font-size: 15px;
  padding: 8px 18px;
  border: none;
  border-radius: 3px;
  line-height: 1.3333333;
  width: 100%;
}
.yz{
  width: 100%;
  margin-top: 30px;
}
</style>
