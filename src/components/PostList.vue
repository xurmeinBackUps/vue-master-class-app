<template>
  <div >
    <post-list-item
      v-for="post in posts" 
      :post="post"
      :key="post['.key']"
      class="posts"
    >



    </post-list-item>
  </div>
</template>

<script>
import PostListItem from './PostListItem.vue';

export default {
  name: 'PostList',
  components: {
    PostListItem
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }

}
</script>

<style>

</style>