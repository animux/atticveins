<template>
    <div id="app">
        <Navbar />
        <router-view />
        <Footer />
    </div>
</template>

<script>
import Navbar from '@/ui/Navbar.vue';
import Footer from '@/ui/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,900;1,900&display=swap');

html, body {
    background-color: #0e0e0e !important;
    width: 100vw;
    height: 100%;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    font-family: 'Barlow', sans-serif;
}

button {
    background-color: white !important;
    color: #0E0E0E !important;
    border-radius: 5px !important;
    border: none;
    padding: 10px 20px !important;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin-right: 10px !important;
    transition: ease-in-out 0.3s !important;
    font-family: 'Barlow', sans-serif;
}

button:hover {
    transition: ease-in-out 0.3s !important;
    background-color: #0E0E0E !important;
    color: white !important;
}

button:focus {
    border: none !important;
    outline: none !important;
}

</style>
