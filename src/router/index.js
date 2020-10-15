import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/PageHome.vue';
import ThreadShow from '@/views/PageThreadShow.vue'
import Forum from '@/views/PageForum.vue'
import Category from '@/views/PageCategory.vue'
import NotFound from '@/views/PageNotFound.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/thread/:id', name: 'ThreadShow', component: ThreadShow, props: true },
    { path: '/forum/:id', name: 'Forum', component: Forum, props: true },
    { path: '/category/:id', name: 'Category', component: Category, props: true },
    { path: '*', name: 'NotFound', component: NotFound }
  ]
})
