<template>
  <span :title="timestamp | dateInHuman">
    {{ timestamp | elapsedTime }}
  </span>
</template>

<script>
import moment from 'moment';

export default {
  name: 'VDate',
  props: {
    timestamp: {
      type: Number,
      required: true
    }
  },
  filters: {
    dateInHuman: function(date) {
      return moment.unix(date).format('MMMM Do YYYY, h:mm:ss a')
    },
    elapsedTime: function(date) {
      return moment.unix(date).fromNow()
    }
  }

}
</script>
