<template>
  <div class="thread section">

    <div>
      <h4 class="center-align truncate">
        <router-link :to="{ name: 'ThreadShow', params: { id: thread['.key'] } }">
          {{ thread.title }}
        </router-link>
      </h4>
      <p class="text-faded text-xsmall">
        By <a href="#">{{ user.name }}</a>, {{ thread.publishedAt }}.
      </p>
    </div>

    <div class="activity valign-wrapper">
      <p class="replies-count left">
        <span
          class="new badge"
          data-badge-caption="Replies"
        >{{ repliesCount }}</span>
      </p>

      <!--<img class="avatar-medium" src="http://i0.kym-cdn.com/photos/images/facebook/000/010/934/46623-batman_pikachu_super.png" alt="">-->

      <!--<div>-->
        <!--<p class="text-xsmall">-->
          <!--<a href="#">Bruce Wayne</a>-->
        <!--</p>-->
        <!--<p class="text-xsmall text-faded">2 hours ago</p>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
import sampleData from '@/data.json';

export default {
  name: 'ThreadListItem',
  props: {
    thread: {
      type: Object,
      required: true
    }
  },
  computed: {
    repliesCount: function() {
      return Object.keys(this.thread.posts).length - 1
    },
    user: function() {
      return sampleData.users[this.thread.userId]
    }
  }
}
</script>

<style>

</style>
