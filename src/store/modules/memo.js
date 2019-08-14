const state = {
  memoList: [], //memo列表
};
const getters = {
  //根据关键词搜索
  getMemo(state) {
    //TODO: 根据关键词搜索
    return state.memoList;
  }
};
const mutations = {
  /* 增 */
  addMemo(state, payload) {
    state.memoList.unshift(payload);
  },
  /* 删 */
  deleteMemo(state, payload) {
    state.memoList.unshift(payload);
  },
  /* 改 */
  updateMemo(state, payload) {
    state.memoList.unshift(payload);
  }
};

const actions = {};
export default {
  state,
  mutations,
  getters,
  actions
};
