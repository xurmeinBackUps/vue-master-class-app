<template>
  <div class="forum-wrapper">
    <div class="col-full push-top">
      <div class="forum-header">
        <div class="forum-details">
          <h1>{{forum.name}}</h1>
          <p class="text-lead">{{forum.description}}</p>
        </div>
        <a href="new-thread.html" class="btn-green btn-small">Start a thread</a>
      </div>
    </div>

    <div class="col-full push-top">
      <ThreadList :threads="threads"/>
    </div>
  </div>
</template>

<script>
import ThreadList from '@/components/ThreadList.vue';
import sampleData from '@/data.json';

export default {
  name: 'PageForum',
  components: {
      ThreadList
    },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    forum: function() {
      return sampleData.forums[this.id]
    },
    threads: function() {
      return Object.values(sampleData.threads)
        .filter(thread => thread.forumId === this.id)
    }
  }
}



</script>
      

<style scoped>
  .forum-wrapper {
    width: 100%;
  }
</style>
