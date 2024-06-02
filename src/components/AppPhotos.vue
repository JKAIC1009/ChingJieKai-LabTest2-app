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
export default {
  name: 'AppPhotos',
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    this.$store.dispatch('fetchPhotos');
  },
  computed: {
    photos() {
      const searchTerm = this.$store.state.searchTerm;
      return this.$store.state.photos.filter(photo => 
        photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        photo.id.toString() === searchTerm
      );
    }
  },
  watch: {
    photos() {
      this.loading = false;
    }
  },
};
</script>

<style scoped>
@import '../assets/styles.css';
</style>