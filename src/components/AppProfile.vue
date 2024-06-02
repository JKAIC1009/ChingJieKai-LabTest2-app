<template>
    <div class="profile">
      <table class="profileTable">
        <tr>
          <td>Name</td>
          <td class="devider">:</td>
          <td><input type="text" v-model="newProfile.name" class="inputField" /></td>
        </tr>
        <tr>
          <td>Course Year</td>
          <td class="devider">:</td>
          <td><input type="text" v-model="newProfile.courseYear" class="inputField" /></td>
        </tr>
        <tr>
          <td>Matrix No</td>
          <td class="devider">:</td>
          <td><input type="text" v-model="newProfile.matrixNo" class="inputField" /></td>
        </tr>
        <tr>
          <td>Address</td>
          <td class="devider">:</td>
          <td><input type="text" v-model="newProfile.address" class="inputField" /></td>
        </tr>
        <tr>
          <td colspan="3" class="buttonCell">
            <button @click="saveProfile" class="button">Save</button>
            <button @click="resetProfile" class="button">Reset</button>
          </td>
        </tr>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AppProfile',
    data() {
      return {
        newProfile: { ...this.$store.getters.getProfile },
        initialProfile: { ...this.$store.getters.getProfile },
      };
    },
    computed: {
      profile() {
        return this.$store.getters.getProfile;
      },
    },
    methods: {
      saveProfile() {
        this.$store.dispatch('updateProfile', this.newProfile);
        window.alert('Profile saved');
      },
      resetProfile() {
        this.newProfile = JSON.parse(JSON.stringify(this.$store.getters.getProfile));
    },

    },
  };
  </script>
  
  <style scoped>
  /* Your existing styles */
  </style>
  