import Vue from 'vue'
import VueRouter from 'vue-router'
import Money from '@/views/Money.vue'
import Labels from '@/views/Labels.vue'
import Statistics from '@/views/Statistics.vue'
import Notfound from '@/views/Notfound.vue'

Vue.use(VueRouter)   //在router文件中直接使用use全局安装路由

  const routes= [
  {
    path:'/',
    redirect:'/money'
  },
  {
    path:'/money',
    component:Money
  },
  {
    path:'/labels',
    component:Labels
  },
  {
    path:'/statistics',
    component:Statistics
  },
  {
    path:'*',
    component:Notfound
  }
]

const router = new VueRouter({
  routes
})

export default router
