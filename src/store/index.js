/**
 * Created by WUZLC on 2017/6/8.
 */
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const state = {
  demo: {
    cons1: 'default'
  },
}

const mutations = {};


export default new Vuex.Store({
  state,
  mutations
});
