<template>
  <div>
    <CategoryList :categories="categories"/>
  </div>
</template>


<script>
import sampleData from '@/data.json';
import CategoryList from '@/components/CategoryList.vue';

export default {
  name: 'PageHome',
  components: {
    CategoryList
  },
  data: function() {
    return {
      categories: Object.values(sampleData.categories),
    }
  }
}
</script>
