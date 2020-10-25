import Vue from 'vue'
import Vuex from 'vuex'
import sampleData from '@/data.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ...sampleData,
    authId: 'u4r8XCziZEWEXsj2UIKNHBoDh0n2'
  },
  getters: {
    authUser: function(state) {
      return state.users[state.authId]
    }
  },
  actions: {
    createPost: function(context, post) {
      const postId = 'post-' + Math.random()
      post['.key'] = postId

      context.commit('setPost', { post, postId })
      context.commit('appendPostToThread', { threadId: post.threadId, postId })
      context.commit('appendPostToUser', { userId: post.userId, postId })
    }
  },
  mutations: {
    setPost: function (state, { post, postId }) {
      Vue.set(state.posts, postId, post)
    },
    appendPostToThread: function(state, { postId, threadId }) {
      const thread = state.threads[threadId]
      Vue.set(thread.posts, postId, postId)
    },
    appendPostToUser: function(state, { postId, userId }) {
      const user = state.users[userId]
      Vue.set(user.posts, postId, postId)
    }
  }
})