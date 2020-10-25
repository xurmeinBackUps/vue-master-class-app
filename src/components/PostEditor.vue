<template>

    <form
      class="post-form"
      @submit.prevent="savePost"  
    >
      <div class="form-group">
        <textarea
          class="form-input"
          v-model="postText"
        ></textarea>
      </div>
      <div class="form-actions">
        <button class="btn cyan-accent 2">Submit Post</button> 
      </div>
    </form>
</template>

<script>
export default {
  name: 'PostEditor',
  props: {
    threadId: {
      type: [String, Number],
      required: true
    }
  },
  data: function() {
    return {
      postText: ''
    }
  },
  methods: {
    savePost: function() {
      
      const post = {
        text: this.postText,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.threadId,
        userId: 'u4r8XCziZEWEXsj2UIKNHBoDh0n2', // hard-coded now, f/m data.json
      }
      // takes three args: 1) object, 2) propertyName, 3) propertyVal 
      this.postText = ''

      this.$emit('save-post', { post: post })
      this.$store.dispatch('createPost', post)
    }
  }
}

</script>

<style>

</style>