<template>
  <div class="app">
    <the-navbar></the-navbar>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue';

export default {
  name: 'App',
  components: {
    'the-navbar': TheNavbar
  }
}
</script>

<style>
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
