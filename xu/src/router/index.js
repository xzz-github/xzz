import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import bodyHome from '@/components/bodyHome'
import about from '@/components/about'
import menu from '@/components/menu'
import news from '@/components/news'
import relation from '@/components/relation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: bodyHome
    },
    {
      path: '/about',
      component: about
    },
    {
      path: '/menu',
      component: menu
    },
    {
      path: '/news',
      component: news
    },
    {
      path: '/relation',
      component: relation
    }
  ],
  mode: 'history'
})
