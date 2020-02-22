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
            isVideo: true,
            likes: 50
          },
          {
            id: 1,
            isVideo: false,
            likes: 50
          },
          {
            id: 2,
            isVideo: true,
            likes: 50
          },
          {
            id: 3,
            isVideo: true,
            likes: 50
          },
          {
            id: 4,
            isVideo: false,
            likes: 50
          },
          {
            id: 5,
            isVideo: false,
            likes: 50
          },
          {
            id: 6,
            isVideo: true,
            likes: 50
          },
          {
            id: 7,
            isVideo: true,
            likes: 50
          },
          {
            id: 8,
            isVideo: true,
            likes: 89
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
            isVideo: false,
            likes: 78
          },
          {
            id: 1,
            isVideo: false,
            likes: 572
          },
          {
            id: 2,
            isVideo: true,
            likes: 10
          },
          {
            id: 3,
            isVideo: false,
            likes: 50
          },
          {
            id: 4,
            isVideo: false,
            likes: 25
          },
          {
            id: 5,
            isVideo: false,
            likes: 490
          },
          {
            id: 6,
            isVideo: true,
            likes: 50
          },
          {
            id: 7,
            isVideo: true,
            likes: 50
          },
          {
            id: 8,
            isVideo: true,
            likes: 70
          }
        ]
      },
      {
        id: 2,
        name: 'Lorenzo Sciuto',
        inTeam: false,
        admin: false,
        media: [
          {
            id: 0,
            isVideo: true,
            likes: 50
          },
          {
            id: 1,
            isVideo: false,
            likes: 50
          },
          {
            id: 2,
            isVideo: false,
            likes: 50
          },
          {
            id: 3,
            isVideo: true,
            likes: 50
          },
          {
            id: 4,
            isVideo: false,
            likes: 50
          },
          {
            id: 5,
            isVideo: false,
            likes: 50
          },
          {
            id: 6,
            isVideo: true,
            likes: 50
          },
          {
            id: 7,
            isVideo: true,
            likes: 50
          },
          {
            id: 8,
            isVideo: true,
            likes: 60
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
    },
    addLike(state, payload){
      state.ambassadors
        .find(amb => amb.id === payload.ambId)
        .media.find(media => media.id === payload.mediaId).likes += 1;
    }
  },
  actions: {},
  modules: {}
});
