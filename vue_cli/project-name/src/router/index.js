import Vue from 'vue'
import Router from 'vue-router'
import movie from '@/components/movie/movie'
// import HelloWorld from '@/components/HelloWorld'
// import CommonHeader from '@/components/common/CommonHeader'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path:'/movie',
      component:movie

    }
  ]
})
