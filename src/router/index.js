import Vue from 'vue'
import Router from 'vue-router'
import ThePage from '@/components/ThePage.vue';
import ThreadShow from '@/components/thread/ThreadShow.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'ThePage', component: ThePage },
    { path: '/thread/:id', name: 'ThreadShow', component: ThreadShow, props: true }
  ]
})
