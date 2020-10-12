<template>
  <div>
    <h2>{{ thread.title }}</h2>

      <div class="posts">

        <table 
          v-for="postId in thread.posts" 
          :key="postId.key"
        >

                

          <tbody>
            <tr>
              <td>
                <img
                  class="avatar circle"
                  :src="users[posts[postId].userId].avatar"
                  alt=""
                />
              </td>
              <td>
                <p class="user-post-text">
                  "{{ posts[postId].text }}"
                  <label class="user-post-username">
                    &#8212; {{ users[posts[postId].userId].name }}
                  </label>
                </p>
              </td>
            </tr>
          </tbody>
        </table>

      </div>

  </div>
</template>

<script>
import sampleData from '@/data.json';

export default {
  name: 'PageThreadShow',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      thread: sampleData.threads[this.id],
      posts: sampleData.posts,
      users: sampleData.users
    }
  }
}
</script>

