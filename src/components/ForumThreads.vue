<template>
  <div class="container">
    <section v-for="thread in threads" :key="thread.key" class="section">
      <h2>{{ thread.title }}</h2>
      <div class="posts">

        <table v-for="postId in thread.posts" :key="postId.key">

                

          <tbody>
            <tr>
              <td>
                <img class="avatar circle" :src="users[posts[postId].userId].avatar" alt="">
              </td>
              <td>
                <p class="user-post-text">"{{ posts[postId].text }}"
                  <label class="user-post-username">
                    &#8212; {{ users[posts[postId].userId].name }}
                  </label>
                </p>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </section>
  </div>
</template>

<script>
import sampleData from '../data.json';
console.log(sampleData)
export default {
  name: 'ForumThreads',
  data () {
    return {
      threads: sampleData.threads,
      posts: sampleData.posts,
      users: sampleData.users
    }
  }
}
</script>

<style scoped>
.user-post-text {
  font-style: italic;
}

.user-post-username {
  font-style: normal; 
  font-size: 14px;
}

.avatar {
  height: 60px;
  width: 60px
}
</style>