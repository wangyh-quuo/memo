import Vue from "vue";
import Vuex from "vuex";
import memo from "./modules/memo"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isClickEdit: false, //是否点击编辑
  },
  mutations: {
    reverseEdit(state){
      state.isClickEdit = !state.isClickEdit;
    }
  },
  actions: {},
  modules: {
    memo
  }
});
