<template>
  <div class="col-full">
    <h1>{{ category.name }}</h1>
    <CategoryListItem :category="category"/>
  </div>
</template>

<script>
import CategoryListItem from '@/components/CategoryListItem.vue'
import sampleData from '@/data.json'

export default {
  name: 'PageCategory',
  components: {
    CategoryListItem
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    category: function() {
      return sampleData.categories[this.id]
    }
  }
}
</script>

<style scoped>
</style>