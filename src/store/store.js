import Vue from "vue";
import Vuex from "vuex";
import memo from "./modules/memo"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isClickEdit: false, //是否点击编辑
    choose: false, //是否显示选择框
  },
  mutations: {
    reverseEdit(state){
      state.isClickEdit = !state.isClickEdit;
      state.choose = !state.choose;
    }
  },
  actions: {},
  modules: {
    memo
  }
});
