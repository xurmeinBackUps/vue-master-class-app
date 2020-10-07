<template>
  <div>
    <h1>Welcome to the Forum</h1>
    <div v-for="thread in threads" :key="thread.key">
      <h2>{{ thread.title }}</h2>
      <section v-if="thread.posts.count !== 0">
        <div v-for="postId in thread.posts" :key="postId.key">
          <p>"{{ posts[postId].text }}"
            <label>&#8212; {{ users[posts[postId].userId].name }}</label>
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import sampleData from '../data.json';
console.log(sampleData)
export default {
  name: 'HelloWorld',
  data () {
    return {
      threads: sampleData.threads,
      posts: sampleData.posts,
      users: sampleData.users
    }
  }
}
</script>
