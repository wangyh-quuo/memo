import Vue from "vue";
import Vuex from "vuex";
import memo from "./modules/memo"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isClickEdit: false, //是否点击编辑
    search: false, //是否选中搜索
    tip: false, //显示提示
    info: '提示内容'
  },
  mutations: {
    reverseEdit(state){
      state.isClickEdit = !state.isClickEdit;
    },
    reverseSearch(state){
      state.search = !state.search;
    },
    success(state,msg="操作成功") {
      state.tip = true;
      state.info = msg;
      setTimeout(()=>{
        state.tip = false;
      },1000)
    },
    fail(state,msg="操作失败") {
      state.tip = true;
      state.info = msg;
      setTimeout(()=>{
        state.tip = false;
      },1000)
    }
  },
  actions: {},
  modules: {
    memo
  }
});
