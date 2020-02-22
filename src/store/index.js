import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ambassadors: [
      {
        id: 0,
        name: 'Andrea Taglia',
        inTeam: true,
        admin: true,
        media: [
          {
            id: 0,
            isVideo: true
          },
          {
            id: 1,
            isVideo: false
          },
          {
            id: 2,
            isVideo: false
          },
          {
            id: 3,
            isVideo: true
          },
          {
            id: 4,
            isVideo: false
          },
          {
            id: 5,
            isVideo: false
          },
          {
            id: 6,
            isVideo: true
          },
          {
            id: 7,
            isVideo: true
          },
          {
            id: 8,
            isVideo: true
          }
        ]
      },
      {
        id: 1,
        name: 'Paolo Debellini',
        inTeam: true,
        admin: true,
        media: [
          {
            id: 0,
            isVideo: true
          },
          {
            id: 1,
            isVideo: false
          },
          {
            id: 2,
            isVideo: false
          },
          {
            id: 3,
            isVideo: true
          },
          {
            id: 4,
            isVideo: false
          },
          {
            id: 5,
            isVideo: false
          },
          {
            id: 6,
            isVideo: true
          },
          {
            id: 7,
            isVideo: true
          },
          {
            id: 8,
            isVideo: true
          }
        ]
      },
      {
        id: 2,
        name: 'Lorenzo Sciuto',
        inTeam: false,
        admin: true,
        media: [
          {
            id: 0,
            isVideo: true
          },
          {
            id: 1,
            isVideo: false
          },
          {
            id: 2,
            isVideo: false
          },
          {
            id: 3,
            isVideo: true
          },
          {
            id: 4,
            isVideo: false
          },
          {
            id: 5,
            isVideo: false
          },
          {
            id: 6,
            isVideo: true
          },
          {
            id: 7,
            isVideo: true
          },
          {
            id: 8,
            isVideo: true
          }
        ]
      }
    ]
  },
  getters: {
    currentTeam: state => {
      return state.ambassadors.filter(el => el.inTeam);
    },
    getAmbassadorById: state => id => {
      return state.ambassadors.find(amb => amb.id === id);
    }
  },
  mutations: {
    addToTeam(state, id) {
      state.ambassadors.find(amb => amb.id === id).inTeam = true;
    },
    removeFromTeam(state, id) {
      state.ambassadors.find(amb => amb.id === id).inTeam = false;
    }
  },
  actions: {},
  modules: {}
});
