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
$primary: #B12E21;
$secondary: #C34632;
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
    background: transparent !important;
    color: white !important;
    border-radius: 15px !important;
    border: 2px solid white !important;
    padding: 8px 15px !important;
    text-align: center;
    text-decoration: none;
    margin-right: 10px !important;
    margin-top: 15px !important;
    transition: ease-in-out 0.3s !important;
    font-family: 'Barlow', sans-serif;
}

button:hover {
    transition: ease-in-out 0.3s !important;
    background-color: white !important;
    color: black !important;
}

button:focus {
    border: none !important;
    outline: none !important;
}

</style>
