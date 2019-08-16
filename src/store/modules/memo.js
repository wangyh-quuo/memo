const state = {
  memoList: [], //memo列表
  thisMemo: {} //memo详细
};
const getters = {
};
const mutations = {
  /* 增 */
  addMemo(state, payload) {
    state.memoList.unshift(payload);
    state.thisMemo = payload;
  },
  /* 删 :1.根据id删除，2.删除选中*/
  deleteMemo(state, payload) {
    for (let key=0; key < state.memoList.length; key++) {
      const element = state.memoList[key];
      //如果payload是一个数组，则为删除选中的memo
      if (typeof payload == "object") {
        for (const value of payload) {
          if (element.id == value) {
            state.memoList.splice(key, 1);
            key--;
            break;
          }
        }
        console.log(state.memoList);
      } else {
        //否则删除当前这个memo
        if (element.id == payload) {
          state.memoList.splice(key, 1);
        }
      }
    }
    //将编辑内容置为空
    state.thisMemo = {};
  },
  /* 删除所有 */
  deleteAll(state) {
    state.memoList = [];
  },
  /* 改 */
  updateMemo(state, payload) {
    state.memoList.unshift(payload);
  },
  /* 根据id查询memo */
  queryMemoById(state, payload) {
    state.memoList.some(memo => {
      if (memo.id == payload) {
        state.thisMemo = memo;
        return true;
      }
      return false;
    });
  }
};

const actions = {};
export default {
  state,
  mutations,
  getters,
  actions
};
