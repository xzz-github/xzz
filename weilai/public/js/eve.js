/**
 * Created by Administrator on 2018/10/22.
 */
new Vue({
    el:"#swiper",
    data:{
        imgArr:[{img:"img/5-Tech-CGI%20Copy%204@2x.jpg",hidden:false},{img:"img/5-Tech-CGI%20Copy%203@2x.jpg",hidden:true},{img:"img/5-Tech-CGI%20Copy%202@2x.jpg",hidden:true},{img:"img/5-Tech-CGI%20Copy@2x.jpg",hidden:true}],
        swiperItem:[true,false,false,false],
        i:0
    },
    methods:{
        chooseSwipe(i){
            for(s in this.swiperItem){
                this.swiperItem[s]=false;
            }
            for(x in this.imgArr){
                this.imgArr[x].hidden=true;
            }
            this.swiperItem[i]=true;
            this.imgArr[i].hidden=false;
            this.i=i;
        }
    }
})