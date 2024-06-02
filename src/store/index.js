
import Vuex from 'vuex'



export default new Vuex.Store({
  state: {
    profile: {
      name: 'Ching Jie Kai',
      courseYear: '3 SECJH',
      matrixNo: 'A21MJ5037',
      address: 'Residensi UTMKL, Jalan Maktab, 54000 Kuala Lumpur',
    },
    photos: [], 
  },

  mutations: {
    updateProfile(state, profile) {
      state.profile.name = profile.name;
      state.profile.courseYear = profile.courseYear;
      state.profile.matrixNo = profile.matrixNo;
      state.profile.address = profile.address;
    },
    setPhotos(state, photos) {
      state.photos = photos;
    },
  },

  actions: {
    updateProfile({ commit }, profile) {
      commit('updateProfile', profile);
    },
    
  },

  getters: {
    getProfile: state => state.profile,
  }
});
