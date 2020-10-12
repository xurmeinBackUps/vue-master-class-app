<template>
  <div class="app">
    <the-navbar></the-navbar>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import TheNavbar from './TheNavbar.vue';

export default {
  name: 'App',
  components: {
    'the-navbar': TheNavbar
  }
}
</script>

<style>
/* Q: "Why use custom class-based CSS?" */
/* A: "Fastest loading times, most scalable format over time,
       recommendation of official Vue.js docs, and it is 
       the current dev community/industry-recognized best & standard practice" 
 */
.user-post-text {
  font-style: italic;
}

.user-post-username {
  font-style: normal; 
  font-size: 14px;
}

.avatar {
  height: 60px;
  width: 60px
}
</style>
