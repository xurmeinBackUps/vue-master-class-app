<template>
  <div>
    <CategoryList :categories="categories"/>
  </div>
</template>


<script>
import CategoryList from '@/components/CategoryList.vue';

export default {
  name: 'PageHome',
  components: {
    CategoryList
  },
  data: function() {
    return {
      categories: Object.values(this.$store.state.categories),
    }
  }
}
</script>
