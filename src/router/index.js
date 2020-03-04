import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dynamic/:categoryId'
    },
    {
      path: '/dynamic/:categoryId',
      name: 'dynamic',
      meta:{
        title:'首页'
      },
      component: ()=>import('@/views/dynamic.vue')
    },
    {
      path: '/new/:categoryId',
      name: 'new',
      meta:{
        title:'首页'
      },
      component: ()=>import('@/views/new.vue')
    },
    {
      path: '/consultDetail/:id',
      name: 'consultDetail',
      component: ()=>import('@/views/shop/consultDetail.vue')
    },
    {
      path: '/activityDetail/:id',
      name: 'activityDetail',
      component: ()=>import('@/views/shop/activityDetail.vue')
    },
    {
      path: '/downloadApp',
      name: 'downloadApp',
      component: ()=>import('@/views/downloadApp.vue')
    },
    {
      path: '/productIntroduction/:id',
      name: 'productIntroduction',
      component: ()=>import('@/views/productIntroduction.vue')
    },
    {
      path: '/marketActivity/:id',
      name: 'marketActivity',
      component: ()=>import('@/views/marketActivity.vue')
    },
    {
      path: '/instruction/:id',
      name: 'instruction',
      component: ()=>import('@/views/instruction.vue')
    },
    {
      path: '/kangyang/:id',
      name: 'kangyang',
      component: ()=>import('@/views/kangyang.vue')
    },
    {
      path: '/medicine/:id',
      name: 'medicine',
      component: ()=>import('@/views/medicine.vue')
    },
    {
      path: '/health/:id',
      name: 'health',
      component: ()=>import('@/views/health.vue')
    },
    {
      path: '/recruitment/:id',
      name: 'recruitment',
      component: ()=>import('@/views/recruitment.vue')
    },
    {
      path: '/companyIntroduction/:id',
      name: 'companyIntroduction',
      component: ()=>import('@/views/companyIntroduction.vue')
    },
    {
      path: '/communityArticleDetail/:id',
      name: 'communityArticleDetail',
      component: ()=>import('@/views/communityArticleDetail.vue')
    },
    {
      path: '/healthArticleDetail/:id',
      name: 'healthArticleDetail',
      component: ()=>import('@/views/healthArticleDetail.vue')
    }
  ]
})
