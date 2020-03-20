import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Home = ()=>import('../views/home/home.vue')
const Shop = ()=>import('../views/shop/shop.vue')
const Cate = ()=>import('../views/cate/cate.vue')
const Mine = ()=>import('../views/mine/mine.vue')
export default new Router({
  routes: [
    {
      path: '',
      redirect:'/home'
    },{
      path:'/home',
      component:Home
    }
    ,{
      path:'/mine',
      component:Mine
    }
    ,{
      path:'/shop',
      component:Shop
    },
    ,{
      path:'/cate',
      component:Cate
    },
  ],
  mode:'history'
})
