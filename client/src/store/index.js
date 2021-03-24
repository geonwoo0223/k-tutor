import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"


Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    currentPage: '', //밑 navbar에서 선택한 페이지
    currentPageValue: 2, //밑 navbar에서 선택한 index
    currentType: '', //선택한 타입(영화, 드라마, 가수) 
    currentClass:'', //최근 클래스 정보
    defaultClass:{cs_seq:1, cs_title: '싸이코지만괜찮아', cs_type:'drama', cs_level:1}, 

    allTitleList: [
      {cs_seq:1, cs_title: '싸이코지만괜찮아', cs_type:'drama', cs_level:1},
      {cs_seq:2, cs_title: '사랑의불시착', cs_type:'drama', cs_level:1},
      {cs_seq:3, cs_title: '스위트홈', cs_type:'drama', cs_level:3},
      {cs_seq:4, cs_title: '미스터선샤인', cs_type:'drama', cs_level:2},
      {cs_seq:5, cs_title: '이태원클라쓰', cs_type:'drama', cs_level:2},

      {cs_seq:6, cs_title: '승리호', cs_type:'movie', cs_level:1},
      {cs_seq:7, cs_title: '부산행', cs_type:'movie', cs_level:2},
      {cs_seq:8, cs_title: '설국열차', cs_type:'movie', cs_level:2},
      {cs_seq:9, cs_title: '반도', cs_type:'movie', cs_level:3},
      {cs_seq:10, cs_title: '극한직업', cs_type:'movie', cs_level:1},

      {cs_seq:11, cs_title: '방탄소년단', cs_type:'pop', cs_level:1},
      {cs_seq:12, cs_title: '블랙핑크', cs_type:'pop', cs_level:1},
      {cs_seq:13, cs_title: '아이유', cs_type:'pop', cs_level:1},
      {cs_seq:14, cs_title: '소녀시대', cs_type:'pop', cs_level:2},
      {cs_seq:15, cs_title: '트와이스', cs_type:'pop', cs_level:2},
      {cs_seq:16, cs_title: '태연', cs_type:'pop', cs_level:2},
      {cs_seq:17, cs_title: '악동뮤지션', cs_type:'pop', cs_level:3},
      {cs_seq:18, cs_title: '갓세븐', cs_type:'pop', cs_level:3},
      {cs_seq:19, cs_title: '세븐틴', cs_type:'pop', cs_level:3},
      {cs_seq:20, cs_title: '엑소', cs_type:'pop', cs_level:1},
      {cs_seq:21, cs_title: '박효신', cs_type:'pop', cs_level:1},

    ],
  
  },
  getters: {
    getCurrentTypeTitleList: function (state) {
      let list = state.allTitleList.filter(
        (re) => re.cs_type === state.currentType
      )
      return list

    }

  },
  mutations: {
    changeCurrentPage ( state , changeItem ) {
      state.currentPage = changeItem.navName
      state.currentPageValue = changeItem.navValue
    }
  },
  actions: {
    changePage ({ commit }, changeItem ) {
      commit('changeCurrentPage', changeItem)
    }
  },
  modules: {
  },

  plugins: [createPersistedState()],

})
