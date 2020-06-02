import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const fb = require('../firebaseConfig.js')
const store = new Vuex.Store({
  state: {
    ambassadors: [],
    userLead: {
      isTelegram: true,
      lead: '',
      timestamp: '',
    },
    currentTeamSize: 2,
  },
  getters: {
    currentTeam: (state) => {
      return state.ambassadors.filter((el) => el.inTeam);
    },
    getAmbassadorById: (state) => (id) => {
      return state.ambassadors.find((amb) => amb.id === id);
    },
    teamIsFull: (state) => (vm) => {
      return state.currentTeamSize == vm.$maxTeamSize;
    }
  },
  mutations: {
    setAmbassadorsFromDB(state, val) {
      state.ambassadors = val;
    },
    addToTeam(state, id) {
      let amb = state.ambassadors.find((amb) => amb.id === id);
      if (!amb.inTeam) {
        amb.inTeam = true;
        state.currentTeamSize++;
      }
    },
    removeFromTeam(state, id) {
      let amb = state.ambassadors.find((amb) => amb.id === id);
      if (amb.inTeam) {
        amb.inTeam = false;
        state.currentTeamSize--;
      }
    },
    addLike(state, payload) {
      let medias = state.ambassadors.find((amb) => amb.id === payload.ambId)
        .media;
      medias.find((media) => media.id === payload.mediaId).likes += 1;
      fb.ambassadorsCollection
        .doc(payload.ambId + '')
        .set({ media: medias }, { merge: true });
    },
    setUserLead(state, payload) {
      let userLead = {
        isTelegram: payload.isTelegram,
        lead: payload.lead,
        timestamp: new Date().getTime(),
      };
      state.userLead = userLead;
      fb.userLeadsCollection.add(userLead);
    },
  },
  actions: {
    fetchAmbassadors({ commit }) {
      fb.ambassadorsCollection.get().then((querySnapshot) => {
        if (querySnapshot.empty) {
          //this.$router.push('/HelloWorld')
        } else {
          // this.loading = false;
          var ambCollection = [];
          querySnapshot.forEach((doc) => {
            ambCollection.push(doc.data());
          });
          ambCollection.sort(function(a, b) {
            return a.id - b.id;
          });
          commit('setAmbassadorsFromDB', ambCollection);
        }
      });
    },
  },
  modules: {},
});

store.dispatch("fetchAmbassadors");
export default store;