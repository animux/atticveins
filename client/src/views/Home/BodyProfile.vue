<template>
    <div id="bodyprofile">
        <b-container>
            <h1>Complete the quiz to get your free body profile</h1>
            <a href="/body-profile"><img class="img-fluid" :src="require('@/assets/bodyprofile/2.png')"></a>            
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'BodyProfile'
}
</script>

<style scoped lang="scss">
    #bodyprofile {
        background-image: url('../../assets/bodyprofile/1. Background 2.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        width: 100vw;
        color: white;
        height: 100vh;
        text-align: center;
        .img-fluid {
            width: 50%;
            height: 50%;
        }
        h1 {
            font-family: 'Barlow', sans-serif !important;
            font-weight: 900;
            letter-spacing: 0.5;
            padding-top: 50px;
            font-size: 5em;
        }
        img {
            margin-top: 20px;
        }
        @media screen and (max-width: 720px) {
            h1 {
                font-size: 2.5em;
            }
        }
    }
</style>