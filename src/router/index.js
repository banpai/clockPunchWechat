import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Recommend = () => import('@/components/recommend/recommend')
const Loading = () => import('@/components/loading/loading')
const Join = () => import('@/components/join/join')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/loading'
    },
    {
      path: '/loading',
      component: Loading
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/join',
      component: Join
    }
  ]
})
