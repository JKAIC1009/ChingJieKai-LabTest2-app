<template>
    <div class="photos">
      <h2 class = "PhotosPageHeader">Photos List</h2>
      <hr>
      <br>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <div v-for="photo in photos" :key="photo.id" class="photo">
          <p>{{photo.id}}. {{ photo.title }}</p>
          <img :src="photo.thumbnailUrl" alt="Photo" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'AppPhotos',
    data() {
      return {
        photos: [],
        loading: true,
      };
    },
    mounted() {
      this.fetchPhotos();
    },
    methods: {
      fetchPhotos() {
        axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
          .then(response => {
            this.photos = response.data;
            this.loading = false;
          })
          .catch(error => {
            console.error('Error fetching photos:', error);
            this.loading = false;
          });
      },
    },
  };
  </script>
  
  <style scoped>
  @import '../assets/styles.css';
  </style>
  