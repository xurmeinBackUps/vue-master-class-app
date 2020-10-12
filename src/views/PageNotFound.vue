<template>
  <div class="page-not-found">
    <h1>OH NOES!</h1>
    <p>You have become lost!</p>
    <p>Return to the <router-link :to="{ name: 'Home' }">home page</router-link>, and try again.</p>
  </div>
</template>

<script>
export default {
  name: 'PageNotFound',
}
</script>