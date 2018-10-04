import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import StarRating from 'vue-star-rating'

Vue.component('star-rating', StarRating);
Vue.use(VueResource);

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const createStore = () => {
  return new Vuex.Store({
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
  })
}

export default createStore
