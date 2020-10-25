import Vue from 'vue'
import Vuex from 'vuex'
import sampleData from '@/data.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: sampleData
})