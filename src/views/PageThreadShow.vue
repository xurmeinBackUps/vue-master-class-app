<template>
  <div>
    <h2>{{ thread.title }}</h2>
    <p>
      By <a href="#">{{ thread.userId }}</a>, <VDate :timestamp="thread.publishedAt"/>
      <span>{{ posts.length }} replies</span>
    </p>
    <PostList :posts="posts" />
    <PostEditor 
      @save-post="addPost"
      :threadId="id"
    />
  </div>
</template>

<script>
import sampleData from '@/data.json';
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
      thread: sampleData.threads[this.id],
      newPostText: ''
    }
  },
  methods: {
    addPost: function({post}) {
      const postId = post['.key']
      this.$set(sampleData.posts, postId, post)
      this.$set(this.thread.posts, postId, postId)
      this.$set(sampleData.users[post.userId].posts, postId, postId)

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

