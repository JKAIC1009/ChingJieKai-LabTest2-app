
import Vuex from 'vuex'
import axios from 'axios';


export default new Vuex.Store({
  state: {
    profile: {
      name: 'Ching Jie Kai',
      courseYear: '3 SECJH',
      matrixNo: 'A21MJ5037',
      address: 'Residensi UTMKL, Jalan Maktab, 54000 Kuala Lumpur',
    },
    photos: [], 
    searchTerm: '',
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
    setSearchTerm(state, searchTerm) {
      state.searchTerm = searchTerm;
    },
  },

  actions: {
    updateProfile({ commit }, profile) {
      commit('updateProfile', profile);
    },
    fetchPhotos({ commit }) {
      axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
        .then(response => {
          commit('setPhotos', response.data);
        })
        .catch(error => {
          console.error('Error fetching photos:', error);
        });
    },
  },

  getters: {
    getProfile: state => state.profile,
  }
});
