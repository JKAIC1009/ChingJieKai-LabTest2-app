<template>
    <div class="navbar">
        <div class="icon">
            <h2 class="logo">W.Tech.</h2>
        </div>


        <div class="menu">
            <ul>
                <li><router-link to="/">HOME</router-link></li>
                <li><router-link to="/about">ABOUT</router-link></li>
                <li><router-link to="/profile">PROFILE</router-link></li>
                <li><router-link to="/photos">PHOTOS</router-link></li>
            </ul>
        </div>


        <div class="search">
            <input class="srch" type="search" name="" placeholder="Type To Find">
            <a href="#"> <button class="btn">Find</button></a>
        </div>
    </div>
</template>


<script>
export default {
    name: 'AppNavbar'
}
</script>

<style scoped>
@import "../assets/styles.css";
</style>