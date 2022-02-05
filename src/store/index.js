import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    memoList: [],
    memoSeq: 0
  },
  mutations: {
    addMemo(state, payload) {
      // 아이디 생성하면서 시퀀스 증가시킨 값을 넣기
      payload.id = ++state.memoSeq;
      payload.createAt = new Date().toLocaleTimeString();
      state.memoList.push(payload);
     
    },
    deleteMemo(state, id) {
      const newMemoList = state.memoList.filter(memo=>memo.id !== id);
      state.memoList = newMemoList;

    }
    
  },
  actions: {
  },
  modules: {
  }
})
