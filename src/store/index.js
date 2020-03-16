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
      timestamp: ''
    }
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
<<<<<<< HEAD
    addLike(state, payload) {
=======
    addLike(state, payload){
>>>>>>> 3d2d2f53a5300e36d47b09ba386d78ef7eafe3c8
      let medias = state.ambassadors.find(amb => amb.id === payload.ambId).media;
      medias.find(media => media.id === payload.mediaId).likes+=1;
      fb.ambassadorsCollection
        .doc(payload.ambId + '')
        .set({ media: medias }, { merge: true });
    },
<<<<<<< HEAD
    setUserLead(state, payload) {
=======
    setUserLead(state, payload){
>>>>>>> 3d2d2f53a5300e36d47b09ba386d78ef7eafe3c8
      let userLead = ({
        isTelegram: payload.isTelegram,
        lead: payload.lead,
        timestamp: new Date().getTime()
      });
      state.userLead = userLead;
      fb.userLeadsCollection.add(userLead)
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
<<<<<<< HEAD
          ambCollection.sort(function(a, b) {
            return a.id - b.id;
          });
=======
>>>>>>> 3d2d2f53a5300e36d47b09ba386d78ef7eafe3c8
          commit("setAmbassadorsFromDB", ambCollection);
        }
      });
    }
  },
  modules: {}
});

store.dispatch("fetchAmbassadors");
export default store;