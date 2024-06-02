<template>
  <div class="container">
      <AppNavbar/>
      <router-view></router-view>
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'

export default {
  name: 'App',
  components: {
    AppNavbar,
  }
}
</script>

<style scoped>
@import './assets/styles.css';
</style>
