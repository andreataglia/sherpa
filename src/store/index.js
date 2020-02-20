import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ambassadors:[
      {
        id: 0,
        name: 'Andrea Taglia',
        inTeam: true
      },
      {
        id: 1,
        name: 'Paolo Debellini',
        inTeam: true
      },
      {
        id: 2,
        name: 'Lorenzo Sciuto',
        inTeam: false
      }
    ]
  },
  getters: {
    currentTeam: state => {
      return state.ambassadors.filter(el => el.inTeam)
    },
    getAmbassadorById: (state) => (id) => {
      return state.ambassadors.find(amb => amb.id === id)
    }
  },
  mutations: {
    addToTeam(state, id){
      state.ambassadors.find(amb => amb.id === id).inTeam = true;
    },
    removeFromTeam(state, id){
      state.ambassadors.find(amb => amb.id === id).inTeam = false;
    }
  },
  actions: {
  },
  modules: {
  }
})
