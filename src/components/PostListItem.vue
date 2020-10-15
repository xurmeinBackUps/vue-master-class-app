<template>
  <div class="valign-wrapper" :post="post">
    <p class="user-post-text">
      <img class="avatar circle" :src="user.avatar" alt="" />
      "{{ post.text }}"
      <label class="user-post-username">
        &#8212; {{ user.name }},
        <VDate :timestamp="post.publishedAt" />
      </label>
      {{ userPostCount }} posts
    </p>
  </div>
</template>

<script>
import sampleData from '@/data.json';
import VDate from './VDate.vue';

export default {
  name: 'PostListItem',
  components: {
    VDate
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    user: function() {
      return sampleData.users[this.post.userId];
    },
    userPostCount: function() {
      return Object.keys(this.user.posts).length;
    }
  }
};
</script>
