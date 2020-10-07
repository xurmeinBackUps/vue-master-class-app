<template>
  <div class="app">
    <the-navbar></the-navbar>
    <router-view/>
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

