import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
Vue.use(Vuex)
import state from './state'
import getters from './getters'
import actions from './action'
import mutations from './mutations'
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
})