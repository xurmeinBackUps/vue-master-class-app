<template>
  <div>
    <h2>{{ thread.title }}</h2>
    <p>
      By <a href="#">{{ thread.userId }}</a>, <VDate :timestamp="thread.publishedAt"/>
      <span>{{ posts.length }} replies</span>
    </p>
    <PostList :posts="posts" />
    <PostEditor :threadId="id" />
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue';
import PostEditor from '@/components/PostEditor.vue';
import VDate from '@/components/VDate.vue';

export default {
  name: 'PageThreadShow',
  components: {
    PostList,
    PostEditor,
    VDate
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data: function() {
    return {
      thread: this.$store.state.threads[this.id],
      newPostText: ''
    }
  },
  computed: {
    posts: function() {
      const postIds = Object.values(this.thread.posts)
      return Object.values(this.$store.state.posts)
        .filter(post => postIds.includes(post['.key']))
    }
  }
}
</script>

