<template>
    <div class = "about">
        <table class = "AboutTable">
            <tr>
                <td>Name</td>
                <td class = "devider">:</td>
                <th>{{ profile.name }}</th>
            </tr>
            <tr>
                <td>Course Year</td>
                <td class = "devider">:</td>
                <th>{{ profile.courseYear }}</th>
            </tr>
            <tr>
                <td>Matrix No</td>
                <td class = "devider">:</td>
                <th>{{ profile.matrixNo }}</th>
            </tr>
            <tr>
                <td>Address</td>
                <td class = "devider">:</td>
                <th>{{ profile.address }}</th>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
  name: 'AppAbout',
  computed: {
    profile() {
      return this.$store.getters.getProfile;
    },
  },
};
</script>

<style scoped>
@import '../assets/styles.css';
</style>

