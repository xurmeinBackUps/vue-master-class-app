<template>
  <nav class="light-blue darken-3">
    <div class="nav-wrapper container">
      <span class="left">
        <h1 class="nav-title">Welcome to the Forums</h1>
      </span>
   
            <img
              class="avatar-small"
              src="https://elusivepunchbowl.files.wordpress.com/2014/04/16det4-21.png"
              width="60"
              height="60"
              alt=""
            />
            <span>
                {{ user.name }}
                <img
                  class="icon-profile"
                  src="../../assets/arrow-profile.svg"
                  alt=""
                />
            </span>

      <img
        src="../../assets/logo.png"
        width="60"
        height="60"
        class="brand-logo right responsive-img"
      />
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TheNavbar',
  computed: {
    ...mapGetters({
      'user': 'authUser'
    })
  }
}
</script>

<style scoped>
.nav-title {
  height: 60px;
  margin: 0;
}
</style>