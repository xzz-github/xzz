<template>
<div class="item">
    <div class="item-id-1">
        <table></table>
        <div class="item-1-top">
            <img src="http://bk.image.styleweb.com.cn/2017/11/8/13039_j9qig91x.png?imageView2/2/w/1800">
        </div>
        <div class="item-1-a1">
            <img src="http://bk.image.styleweb.com.cn/2017/11/9/13039_j9rwl8t4.png">
        </div>
        <div>
            <img src="http://bk.image.styleweb.com.cn/2017/11/9/13039_j9rwm36j.png?imageView2/2/w/1800">
        </div>
        <div>
            <img src="http://bk.image.styleweb.com.cn/2017/11/9/13039_j9rwnfh7.png?imageView2/2/w/1800">
        </div>
    </div>   
    <div class="item-id-2">
        <table></table>
        <div class="item-2">
            <div class="item-2-title">
                <p class="item-2-title-top">{{texts[0]}}</p>
                <p class="item-2-title-middle">{{texts[1]}}</p>
                <p class="item-2-title-bottom">{{texts[2]}}</p>
            </div>
            <div class="slider" @mouseover="stop" @mouseleave="play">
                <div class="all-img" :style="containerStyle">
                  <ul>
                     <li>
                      <div class="gloab">
                        <div class="slider-img">
                          <img :src="sliders[sliders.length - 1].img">
                        </div>
                        <div class="slider-text">
                          <p>{{sliders[sliders.length - 1].text}}</p>
                        </div>
                      </div>
                    </li>
                    <li v-for="(item, index) in sliders" :key="index">
                      <div class="gloab">
                        <div class="slider-img">
                          <img :src="item.img">
                        </div>
                        <div class="slider-text">
                          <p>{{item.text}}</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="gloab">
                        <div class="slider-img">
                          <img :src="sliders[0].img">
                        </div>
                        <div class="slider-text">
                          <p>{{sliders[0].text}}</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <ul class="direction">
                    <li class="left" @click="move(400, 1)">
                      <svg class="icon" width="30px" height="40.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M481.233 904c8.189 0 16.379-3.124 22.628-9.372 12.496-12.497 12.496-32.759 0-45.256L166.488 512l337.373-337.373c12.496-12.497 12.496-32.758 0-45.255-12.498-12.497-32.758-12.497-45.256 0l-360 360c-12.496 12.497-12.496 32.758 0 45.255l360 360c6.249 6.249 14.439 9.373 22.628 9.373z"  /></svg>          
                    </li>
                    <li class="right" @click="move(400, -1)">
                      <svg class="icon" width="30px" height="40.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M557.179 904c-8.189 0-16.379-3.124-22.628-9.372-12.496-12.497-12.496-32.759 0-45.256L871.924 512 534.551 174.627c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0l360 360c12.496 12.497 12.496 32.758 0 45.255l-360 360c-6.249 6.249-14.439 9.373-22.628 9.373z"  /></svg>          
                    </li>
                  </ul>
                  <ul class="dots">
                     <li v-for="(dot, i) in yuan" :key="i" 
        :class="{dotted: i === (currentIndex-1)}"
        @click = jump(i+1)>
                    </li>
                  </ul>
            </div>
        </div>
    </div>
    <div class="item-id-3">
      <div class="i3">
        <div class="i3-left">
          <p class="p1">{{texts[3]}}</p>
          <p class="p2">{{texts[4]}}</p>
        </div>
        <div class="i3-right">
          <div >
            <a href="#">
              {{texts[5]}}
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="item-id-4">
      <table></table>
      <div class="i4-a">
        <img src="http://bk.image.styleweb.com.cn/2017/11/8/13039_j9qig91x.png?imageView2/2/w/1800">
      </div>
      <div class="i4-text">
        <p class="i4-text-first">
          {{texts[6]}}
        </p>
        <p class="i4-text-second">
          {{texts[7]}}
        </p>
        <p class="i4-text-three">
         {{texts[8]}}
        </p>
      </div>
    </div>
    <div class="item-id-5">
      <table></table>
      <div class="i5-a"> 
        {{texts[9]}}
      </div>
      <div class="i5-b">
        {{texts[10]}}
      </div>
      <div class="i5-c">
        <div class="i5-c-nav">
          <ul>
            <li v-for="(list,a) in navlists" :key="a" :class="{orange:changeOr == a}" @click="ors(a)">{{list.text}}</li>
          </ul>
        </div>
        <div class="i5-c-img">
          <div class="i5-c-0" :class="{change:changeC == 0}">
            <ul>
              <li v-for="(pizza,b) in pizzas" :key="b">
                <img :src="pizza.img">
              </li>
            </ul>
          </div>
          <div class="i5-c-1" :class="{change:changeC == 1}">
            <ul>
              <li v-for="(snack,c) in snacks" :key="c">
                <img :src="snack.img">
              </li>
            </ul>
          </div>
          <div class="i5-c-2" :class="{change:changeC == 2}">
            <ul>
              <li v-for="(drink,d) in drinks" :key="d">
                <img :src="drink.img">
              </li>
            </ul>
          </div>
          <div class="i5-c-3" :class="{change:changeC == 3}">
            <ul>
              <li v-for="(sweet,e) in sweets" :key="e">
                <img :src="sweet.img">
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="item-id-6">
      <table></table>
      <div class="i6">
        <ul>
          <li v-for="(aa, f) in datas" :key="f">
            <p>{{aa.p1}}</p>
            <p>{{aa.p2}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="item-id-7">
      <table></table>
      <div class="i7-title">
        <p>{{texts[11]}}</p>
        <p>{{texts[12]}}</p>
      </div> 
      <div class="i7-img">
        <div class="i7-imgs" ref="imgs">
            <ul>
              <li v-for="(bb,g) in imgs" :key="g">
                <div class="i7-imgs-all"> 
                  <div class="i7-imgs-top">
                    <img :src="bb.img">
                  </div>
                  <div class="i7-imgs-text">
                    <p>{{bb.t1}}</p>
                    <p>{{bb.t2}}</p>
                  </div>
                </div>
              </li>
            </ul>
        </div>
      </div>
      <div class="i7-btn">
        <ul>  
          <li v-for="(cc,h) in btns" :key="h" @click="btna(h)">
            <span  :class="{btno:h==bt}"></span>
          </li>
        </ul>
      </div>
    </div>
   <div class="item-id-8">
     <div class="i8">
      <div class="i8-left">
        <p>致电+100-000-0000</p>
        <p>或填写预订表格</p>
        <a href="#">
          BOOK A TABLE
        </a>
      </div>
      <div class="i8-right">
        <img src="http://bk.image.styleweb.com.cn/2018/3/9/13039_jejl0iga.png">
      </div>
     </div>
     
   </div>
</div>
    
</template>

<script>
export default {
  props: {
    initialSpeed: {
      type: Number,
      default: 30
    },
    initialInterval: {
      type: Number,
      default: 4
    }
  },
  data() {
    return {
      texts: [
        "欢迎来到披萨!",
        "家庭咖啡厅和比萨饼店",
        "比萨（Pizza），又称为比萨饼、匹萨、批萨、披萨，是一种发源于意大利的食品，在全球颇受欢迎。比萨饼的通常做法是用发酵的圆面饼上面覆盖番茄酱，奶酪以及其他配料，并由烤炉烤制而成。",
        "Get your pizza delivered!",
        "送你的披萨！随时随地享用我们的甜美菜肴!",
        "MAKE AN ORDER NOW!",
        "EXCELLENT TASTE",
        "TOP QUALITY",
        "我们把100％的爱和奉献放到我们的菜里",
        "将您的注意力投射到我们的菜单上",
        "美味！ 这是它发生的地方！",
        "新闻与事件",
        "这里总有一些有趣的事情"
      ],
      btns: [0, 1],
      yuan: [0, 1, 2, 3, 4],
      sliders: [
        {
          img:
            "http://bk.image.styleweb.com.cn/2017/11/8/13039_j9qgixx4.jpg?imageView2/2/w/614/q/100",
          text: "Deep Dish 1"
        },
        {
          img:
            "http://bk.image.styleweb.com.cn/2017/11/8/13039_j9qgj4lr.jpg?imageView2/2/w/614/q/100",
          text: "California Style 2"
        },
        {
          img:
            "http://bk.image.styleweb.com.cn/2017/11/8/13039_j9qgjb89.jpg?imageView2/2/w/614/q/100",
          text: "Delicious Bacon 3"
        },
        {
          img:
            "http://bk.image.styleweb.com.cn/2017/11/8/13039_j9qgjioa.jpg?imageView2/2/w/614/q/100",
          text: "Savory Minced Pork 4"
        },
        {
          img:
            "http://bk.image.styleweb.com.cn/2017/11/8/13039_j9qgk9iv.jpg?imageView2/2/w/614/q/100",
          text: "New York Style 5"
        },
        {
          img:
            "http://bk.image.styleweb.com.cn/2017/11/8/13039_j9qgjx7e.jpg?imageView2/2/w/614/q/100",
          text: "Vegetables Pizza6"
        },
        {
          img:
            "http://bk.image.styleweb.com.cn/2017/11/8/13039_j9qgk9iv.jpg?imageView2/2/w/614/q/100",
          text: "Ham Upset 7"
        }
      ],
      currentIndex: 1,
      distance: -400,
      transitionEnd: true,
      speed: this.initialSpeed,

      navlists: [
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
      ],
      changeOr: 0,
      changeC: 0,

      pizzas: [
        {
          img:
            "http://bk.image.styleweb.com.cn/2017/11/22/13039_jaast4pe.png?imageView2/2/w/846/q/100"
        },
        {
          img:
            "http://bk.image.styleweb.com.cn/2017/11/22/13039_jaasrh33.png?imageView2/2/w/846/q/100"
        },
        {
          img:
            "http://bk.image.styleweb.com.cn/2017/11/22/13039_jaasthvh.png?imageView2/2/w/846/q/100"
        },
        {
          img:
            "http://bk.image.styleweb.com.cn/2017/11/22/13039_jaast4pe.png?imageView2/2/w/846/q/100"
        },
        {
          img:
            "http://bk.image.styleweb.com.cn/2017/11/22/13039_jaasrh33.png?imageView2/2/w/846/q/100"
        },
        {
          img:
            "http://bk.image.styleweb.com.cn/2017/11/22/13039_jaasthvh.png?imageView2/2/w/846/q/100"
        },
        {
          img:
            "http://bk.image.styleweb.com.cn/2017/11/22/13039_jaast4pe.png?imageView2/2/w/846/q/100"
        },
        {
          img:
            "http://bk.image.styleweb.com.cn/2017/11/22/13039_jaasrh33.png?imageView2/2/w/846/q/100"
        }
      ],
      snacks: [
        {
          img:
            "http://bk.image.styleweb.com.cn/2017/11/22/13039_jaardqzz.png?imageView2/2/w/846/q/100"
        },
        {
          img:
            "http://bk.image.styleweb.com.cn/2017/11/22/13039_jaardfvb.png?imageView2/2/w/846/q/100"
        },
        {
          img:
            "http://bk.image.styleweb.com.cn/2017/11/22/13039_jaaraqqd.png?imageView2/2/w/846/q/100"
        },
        {
          img:
            "http://bk.image.styleweb.com.cn/2017/11/22/13039_jaardfvb.png?imageView2/2/w/846/q/100"
        },
        {
          img:
            "http://bk.image.styleweb.com.cn/2017/11/22/13039_jaaqzkpc.png?imageView2/2/w/846/q/100"
        },
        {
          img:
            "http://bk.image.styleweb.com.cn/2017/11/22/13039_jaaqz9dr.png?imageView2/2/w/846/q/100"
        },
        {
          img:
            "http://bk.image.styleweb.com.cn/2017/11/22/13039_jaaqyihu.png?imageView2/2/w/846/q/100"
        },
        {
          img:
            "http://bk.image.styleweb.com.cn/2017/11/22/13039_jaaqywpd.png?imageView2/2/w/846/q/100"
        }
      ],
      drinks: [
        {
          img:
            "http://bk.image.styleweb.com.cn/2017/11/22/13039_jaaqyihu.png?imageView2/2/w/846/q/100"
        },
        {
          img:
            "http://bk.image.styleweb.com.cn/2017/11/22/13039_jaaqywpd.png?imageView2/2/w/846/q/100"
        },
        {
          img:
            "http://bk.image.styleweb.com.cn/2017/11/22/13039_jaaqz9dr.png?imageView2/2/w/846/q/100"
        },
        {
          img:
            "http://bk.image.styleweb.com.cn/2017/11/22/13039_jaaqzkpc.png?imageView2/2/w/846/q/100"
        },
        {
          img:
            "http://bk.image.styleweb.com.cn/2017/11/22/13039_jaaqz9dr.png?imageView2/2/w/846/q/100"
        },
        {
          img:
            "http://bk.image.styleweb.com.cn/2017/11/22/13039_jaaqzkpc.png?imageView2/2/w/846/q/100"
        }
      ],
      sweets: [
        {
          img:
            "http://bk.image.styleweb.com.cn/2017/11/22/13039_jaardqzz.png?imageView2/2/w/846/q/100"
        },
        {
          img:
            "http://bk.image.styleweb.com.cn/2017/11/22/13039_jaardfvb.png?imageView2/2/w/846/q/100"
        },
        {
          img:
            "http://bk.image.styleweb.com.cn/2017/11/22/13039_jaaraqqd.png?imageView2/2/w/846/q/100"
        },
        {
          img:
            "http://bk.image.styleweb.com.cn/2017/11/22/13039_jaardfvb.png?imageView2/2/w/846/q/100"
        },
        {
          img:
            "http://bk.image.styleweb.com.cn/2017/11/22/13039_jaaqzkpc.png?imageView2/2/w/846/q/100"
        }
      ],

      datas: [
        { p1: "138", p2: "菜单项" },
        { p1: "300+", p2: "访客每天" },
        { p1: "12", p2: "多年经验" },
        { p1: "100%", p2: "口味＆乐趣" }
      ],

      imgs: [
        {
          img:
            "//bk.image.styleweb.com.cn/2018/3/6/_jef0df26.jpg?imageView2/2/w/1200/q/100",
          t1: "十大最佳餐厅",
          t2:
            "对那些遵循古老饮食或者是不想摄入过多有筋面粉的人来说，这些极具创意的比萨面饼菜谱真是极好。"
        },
        {
          img:
            "//bk.image.styleweb.com.cn/2018/3/6/_jef0cuup.jpg?imageView2/2/w/1200/q/100",
          t1: "厨师的选择：全新的味道",
          t2:
            "许多人会避免食用有筋面粉他们的健康也因此有所提高。这里有一个很棒的无筋比萨饼配方，在保留有筋风味的基础上，…"
        },
        {
          img:
            "//bk.image.styleweb.com.cn/2018/3/6/_jef0c9ty.jpg?imageView2/2/w/1200/q/100",
          t1: "与朋友见面的最佳地点",
          t2:
            "比萨是发源于意大利，但是成功在美国推广出来的一种营养和美味的食品。比萨的种类其实繁多，但是如果大致分类，就…"
        },
        {
          img:
            "//bk.image.styleweb.com.cn/2018/3/6/_jef0bofh.jpg?imageView2/2/w/1200/q/100",
          t1: "新的帕尼尼现货是开放的",
          t2:
            "意式披萨则较为简单，一张意式饼底上，可能只要几片番茄，几块新鲜奶酪等，但是他对披萨厨师们，也是一种考验，它…"
        }
      ],

      bt: 0
    };
  },
  computed: {
    containerStyle() {
      return {
        transform: `translate3d(${this.distance}px, 0, 0)`
      };
    },
    interval() {
      return this.initialInterval * 1000;
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.play();
      window.onblur = function() {
        this.stop();
      }.bind(this);
      window.onfocus = function() {
        this.play();
      }.bind(this);
    },
    move(offset, direction, speed) {
      if (!this.transitionEnd) return;
      this.transitionEnd = false;
      direction === -1
        ? (this.currentIndex += offset / 400)
        : (this.currentIndex -= offset / 400);
      if (this.currentIndex > 5) this.currentIndex = 1;
      if (this.currentIndex < 1) this.currentIndex = 5;

      const destination = this.distance + offset * direction;
      this.animate(destination, direction);
    },
    animate(des, direc, speed) {
      if (this.temp) {
        window.clearInterval(this.temp);
        this.temp = null;
      }
      this.temp = window.setInterval(() => {
        if (
          (direc === -1 && des < this.distance) ||
          (direc === 1 && des > this.distance)
        ) {
          this.distance += 30 * direc;
        } else {
          this.transitionEnd = true;
          window.clearInterval(this.temp);
          this.distance = des;
          if (des < -2000) this.distance = -400;
          if (des > -400) this.distance = -2000;
        }
      }, 20);
    },
    jump(index) {
      const direction = index - this.currentIndex >= 0 ? -1 : 1;
      const offset = Math.abs(index - this.currentIndex) * 400;
      const jumpSpeed =
        Math.abs(index - this.currentIndex) === 0
          ? this.speed
          : Math.abs(index - this.currentIndex) * this.speed;
      this.move(offset, direction, jumpSpeed);
    },
    play() {
      if (this.timer) {
        window.clearInterval(this.timer);
        this.timer = null;
      }
      this.timer = window.setInterval(() => {
        this.move(400, -1, this.speed);
      }, this.interval);
    },
    stop() {
      window.clearInterval(this.timer);
      this.timer = null;
    },
    ors(a) {
      this.changeOr = a;
      this.changeC = a;
    },

    btna(h) {
      this.bt = h;
      if (h == 0) {
        this.$refs.imgs.style.transform = "translateX(0)";
      }
      if (h == 1) {
        this.$refs.imgs.style.transform = "translateX(-400px)";
      }
    },

    btnImg: function() {
      if (this.bt == 1) {
        this.$refs.imgs.style.transform = "translateX(0)";
        this.bt = 0;
      } else if (this.bt == 0) {
        this.$refs.imgs.style.transform = "translateX(-400px)";
        this.bt = 1;
      }
    }
  },
  created: function() {
    setInterval(this.btnImg, 4000);
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
.item-id-1 {
  position: relative;
  width: 100%;
  height: 650px;
  background-image: url("http://bk.image.styleweb.com.cn/2017/11/8/13039_j9qg3rya.jpg?imageView2/2/w/2000/q/100");
  background-size: cover;
}
.item-id-1 .item-1-top {
  margin-top: 60px;
}
.item-1-a1 {
  margin-top: 54px;
}
.item-id-2 {
  width: 100%;
  height: 850px;
  background-image: url("http://bk.image.styleweb.com.cn/2017/11/8/13039_j9qg6shk.jpg?imageMogr2/thumbnail/2000x2000/q/100");
}
.item-2 {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}
.item-2-title {
  margin-top: 120px;
  height: 200px;
}
.item-id-2 p {
  margin: 14px 0;
}
.item-2-title-top {
  color: rgb(255, 255, 255);
  font-size: 30px;
}
.item-2-title-middle {
  color: rgb(207, 223, 90);
  font-size: 18px;
}
.item-2-title-bottom {
  color: rgb(187, 187, 187);
  font-size: 14px;
  margin-top: 25px;
}
.item-id-2 .all-img {
  width: 2800px;
  /* transition: all 1s */
}
.item-id-2 .all-img ul {
  list-style: none;
  display: flex;
}
.item-id-2 .gloab {
  width: 400px;
}
.item-id-2 .slider {
  position: relative;
  overflow: hidden;
  text-align: center;
}
.item-id-2 .slider-img {
  width: 307px;
  height: 307px;
  margin: auto;
  border-radius: 50%;
  overflow: hidden;
}
.item-id-2 .slider-img img {
  width: 100%;
}
.item-id-2 .slider-text {
  color: rgb(207, 223, 90);
  font-family: "Times New Roman", Times, serif;
  line-height: 3.15em;
  text-align: center;
  font-size: 18px;
}
.item-id-2 .slider .direction li {
  background-color: rgba(0, 0, 0, 0.5);
}
.item-id-2 .slider .left {
  position: absolute;
  left: 0px;
  top: 133px;
  cursor: pointer;
}
.item-id-2 .slider .right {
  position: absolute;
  right: 0;
  top: 133px;
  cursor: pointer;
}
.item-id-2 .dots {
  margin-top: 60px;
  list-style: none;
  display: flex;
  left: 41%;
  position: relative;
}
.item-id-2 .dots li {
  width: 14px;
  height: 14px;
  background: white;
  margin: 0 15px;
  border-radius: 50%;
}
.item-id-2 .dotted {
  background: yellow !important;
}
.item-id-3 {
  background: rgb(232, 106, 56);
  height: 300px;
}
.item-id-3 .i3 {
  position: relative;
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.item-id-3 .i3 .i3-left .p1 {
  margin-top: 90px;
  color: rgb(255, 255, 255);
  font-size: 60px;
  font-family: "Times New Roman", Times, serif;
}
.item-id-3 .i3 .i3-left .p2 {
  margin-top: 10px;
  text-align: left;
  font-size: 22px;
  color: rgb(255, 255, 255);
}
.item-id-3 .i3 .i3-right {
  margin-top: 130px;
}
.item-id-3 .i3 .i3-right a {
  text-decoration: none;
  color: rgb(255, 255, 255);
  background-color: rgb(232, 106, 56);
  padding: 20px;
  border: 2px solid rgb(255, 255, 255);
  border-radius: 30px;
}
.item-id-3 .i3 .i3-right a:hover {
  color: rgb(232, 106, 56);
  background-color: rgb(255, 255, 255);
}
.item-id-4 {
  background-image: url("http://bk.image.styleweb.com.cn/2017/11/8/13039_j9qienkg.jpg?imageMogr2/thumbnail/2000x2000/q/100");
  position: relative;
  width: 100%;
  height: 650px;
  background-size: cover;
  color: rgb(255, 255, 255);
}
.item-id-4 .i4-a {
  margin-top: 130px;
  margin-bottom: 30px;
}
.item-id-4 .i4-text p {
  margin-bottom: 20px;
}
.item-id-4 .i4-text .i4-text-first,
.i4-text-second {
  font-size: 72px;
  font-family: "Times New Roman", Times, serif;
  color: #fff;
}
.item-id-4 .i4-text .i4-text-three {
  font-size: 22px;
}
.item-id-5 {
  background-image: url("http://bk.image.styleweb.com.cn/2017/11/8/13039_j9qintho.jpg?imageMogr2/thumbnail/2000x2000/q/100");
  position: relative;
  width: 100%;
  height: 850px;
  background-size: cover;
  padding: 0 0 60px;
}
.item-id-5 .i5-a {
  font-size: 30px;
  color: rgb(255, 255, 255);
  margin-top: 130px;
}
.item-id-5 .i5-b {
  font-size: 18px;
  color: rgb(207, 223, 90);
  margin-top: 40px;
}
.item-id-5 .i5-c .i5-c-nav {
  width: 400px;
  margin: 40px auto;
}
.item-id-5 .i5-c .i5-c-nav ul {
  display: flex;
  list-style: none;
  justify-content: space-between;
}
.item-id-5 .i5-c .i5-c-nav li {
  color: rgba(233, 152, 47, 0.8);
  padding: 12px 20px;
  cursor: pointer;
  transition: all 0.3s;
}
.item-id-5 .i5-c .i5-c-nav li:hover {
  border-bottom: 3px solid rgba(233, 152, 47, 0.8);
}
.orange {
  background-color: rgb(233, 152, 47);
  color: #fff !important;
  border-bottom: 3px solid rgba(233, 152, 47, 0.8);
}
.change {
  display: block !important;
}
.item-id-5 .i5-c .i5-c-img {
  position: relative;
  width: 1200px;
  margin: auto;
}
.item-id-5 .i5-c .i5-c-img > div {
  display: none;
}
.item-id-5 .i5-c .i5-c-img ul {
  flex-wrap: wrap;
}
.item-id-5 .i5-c .i5-c-img li {
  width: 24%;
  padding: 20px 5px;
}
.item-id-5 .i5-c .i5-c-img li img {
  width: 100%;
}
.item-id-5 .i5-c .i5-c-img .i5-c-1 li img,
.item-id-5 .i5-c .i5-c-img .i5-c-2 li img,
.item-id-5 .i5-c .i5-c-img .i5-c-3 li img {
  width: 70%;
}
.item-id-6 {
  position: relative;
  height: 320px;
  background-color: rgb(228, 76, 55);
}
.item-id-6 .i6 {
  width: 1200px;
  margin: auto;
  margin-top: 103px;
}
.item-id-6 .i6 ul {
  display: flex;
  justify-content: space-between;
}
.item-id-6 .i6 li p:first-child {
  font-weight: 700;
  font-size: 72px;
  color: rgb(255, 255, 255);
  font-family: FangSong;
}
.item-id-6 .i6 li p:nth-child(2) {
  color: rgb(255, 255, 255);
  font-size: 22px;
}
.item-id-7 {
  height: 800px;
  background-image: url("http://bk.image.styleweb.com.cn/2017/11/8/13039_j9qojwws.jpg?imageMogr2/thumbnail/2000x2000/q/100");
}
.item-id-7 .i7-title p:first-child {
  color: #fff;
  font-size: 30px;
  margin-top: 120px;
}
.item-id-7 .i7-title p:nth-child(2) {
  color: rgb(207, 223, 90);
  font-size: 18px;
  margin: 20px 0 50px;
}
.item-id-7 .i7-img {
  width: 1200px;
  margin: auto;
  overflow: hidden;
}
.item-id-7 .i7-img .i7-imgs {
  width: 1600px;
  transition: all 0.5s;
}
.item-id-7 .i7-img .i7-imgs li {
  width: 376px;
  padding: 12px;
}
.item-id-7 .i7-imgs-top {
  width: 100%;
}
.item-id-7 .i7-imgs-top img {
  width: 100%;
}
.item-id-7 .i7-imgs-text p:first-child {
  color: #cfdf5a;
  font-size: 18px;
  margin: 10px 0;
}
.item-id-7 .i7-imgs-text p:nth-child(2) {
  font-size: 14px;
  line-height: 1.5em;
  color: white;
  text-align: left;
}
.item-id-7 .i7-btn {
  margin-top: 20px;
}
.item-id-7 .i7-btn ul {
  width: 50px;
  margin: auto;
}
.item-id-7 .i7-btn span {
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin: 5px;
  background: #fff;
  cursor: pointer;
}
.btno {
  background: yellow !important;
}
.item-id-8 {
  height: 400px;
}
.item-id-8 .i8 {
  display: flex;
  width: 100%;
}
.item-id-8 .i8 .i8-left {
  background-color: rgb(214, 230, 100);
}
.item-id-8 .i8 .i8-left p{
  font-size: 22px;
  color: rgb(44, 43, 49);
  margin: 15px;
}
.item-id-8 .i8 .i8-left p:first-child{
  margin-top: 110px;
}
.item-id-8 .i8 .i8-left p:nth-child(2){
  margin-bottom: 55px;
}
.item-id-8 .i8 .i8-left a{
  text-decoration: none;
  color: #000;
  font-size: 16px;  
  border: 2px solid black;
  padding: 14px 30px;
  border-radius: 30px;
  cursor: pointer;
}
.item-id-8 .i8 .i8-left a:hover{
      color: rgb(214, 230, 100);
    background-color: rgb(44, 43, 49);
}
.item-id-8 .i8 > div {
  width: 50%;
}
.item-id-8 .i8 .i8-right img {
  width: 100%;
}
</style>
