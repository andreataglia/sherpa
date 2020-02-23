import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const fb = require('../firebaseConfig.js')
const store = new Vuex.Store({
  state: {
    ambassadors: []
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
    setAmbassadorsFromDB(state, val) {
      state.ambassadors = val;
    },
    addToTeam(state, id) {
      state.ambassadors.find(amb => amb.id === id).inTeam = true;
    },
    removeFromTeam(state, id) {
      state.ambassadors.find(amb => amb.id === id).inTeam = false;
    },
    addLike(state, payload){
      let medias = state.ambassadors.find(amb => amb.id === payload.ambId).media;
      medias.find(media => media.id === payload.mediaId).likes+=1;
      fb.ambassadorsCollection
        .doc(payload.ambId + '')
        .set({ media: medias }, { merge: true });
    }
  },
  actions: {
    fetchAmbassadors({ commit }) {
      fb.ambassadorsCollection.get().then(querySnapshot => {
        if (querySnapshot.empty) {
          //this.$router.push('/HelloWorld')
        } else {
          // this.loading = false;
          var ambCollection = [];
          querySnapshot.forEach(doc => {
            ambCollection.push(doc.data());
          });
          commit("setAmbassadorsFromDB", ambCollection);
        }
      });
    }
  },
  modules: {}
});

store.dispatch("fetchAmbassadors");
export default store;