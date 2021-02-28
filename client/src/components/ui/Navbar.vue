<template>
    <div id="navbar">
        <b-navbar toggleable="lg" type="dark">
            <b-container>
                <b-navbar-brand href="/"><img class="img-fluid" width="150px" height="150px" :src="require('@/assets/TITLE-1.png')" /></b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item href="/">Home</b-nav-item>
                        <b-nav-item href="/about">About</b-nav-item>
                        <b-nav-item href="/contact">Contact</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-container>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style lang="scss" scoped>
    #navbar {
        background-color: #0e0e0e !important;
        font-family: 'Barlow', sans-serif;
        color: white;
        z-index: 10;
        .navbar {
            box-shadow: 0 8px 6px -6px black;
            padding: 20px 0;
            img:hover {
                transition: ease-in-out 0.4s;
                box-shadow: 0 10px 3em -4px #000000;
            }
        }
        @media screen and (max-width: 720px) {
            text-align: center;
        }
    }
</style>