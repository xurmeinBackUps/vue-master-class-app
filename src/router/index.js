import Vue from 'vue'
import Router from 'vue-router'
import ForumThreads from '@/components/ForumThreads.vue';

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'ForumThreads', component: ForumThreads },
  ]
})
