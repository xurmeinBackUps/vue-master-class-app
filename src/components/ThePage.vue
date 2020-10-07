<template>
  <div>
    <ThreadList :threads="threads"/>
  </div>
</template>

  <!--  
    <section v-for="thread in threads" :key="thread.key" class="section">
      <h3>Threads</h3>
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
     -->

<script>
import sampleData from '@/data.json';
import ThreadList from '@/components/thread/threadlist.vue';

export default {
  name: 'ThePage',
  components: {
    ThreadList
  },
  data () {
    return {
      threads: Object.values(sampleData.threads),
      posts: sampleData.posts,
      users: sampleData.users
    }
  }
}
</script>
