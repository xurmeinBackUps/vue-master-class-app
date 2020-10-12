<template>
  <div>
    <ThreadList :threads="threads"/>
  </div>
</template>


<script>
import sampleData from '@/data.json';
import ThreadList from '@/components/ThreadList.vue';

export default {
  name: 'PageHome',
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
