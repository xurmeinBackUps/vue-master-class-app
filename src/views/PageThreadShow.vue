<template>
  <div>
    <h2>{{ thread.title }}</h2>
    <PostList :posts="posts" />
  </div>
</template>

<script>
import sampleData from '@/data.json';
import PostList from '@/components/PostList.vue'

export default {
  name: 'PageThreadShow',
  components: {
    PostList
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      thread: sampleData.threads[this.id]
    }
  },
  computed: {
    posts: function() {
      const postIds = Object.values(this.thread.posts)
      return Object.values(sampleData.posts)
        .filter(post => postIds.includes(post['.key']))
    }
  }
}
</script>

