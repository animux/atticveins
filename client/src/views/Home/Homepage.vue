<template>
    <div id="home">
        <div id="home-main">
            <b-carousel id="home-carousel" :interval="4000" controls background="#0e0e0e">
                <div class="main-title text-center">
                    <h1>Create<br> Yourself</h1>
                    <h3>with Attic Veins</h3>
                </div>
                <b-carousel-slide caption="Programs" :img-src="require('@/assets/homepage/1.png')"></b-carousel-slide>
                <b-carousel-slide caption="Meal Plans" :img-src="require('@/assets/homepage/2.png')"></b-carousel-slide>
                <b-carousel-slide caption="Workout" :img-src="require('@/assets/homepage/3.png')"></b-carousel-slide>
                <b-carousel-slide caption="Body Profile" :img-src="require('@/assets/homepage/4.png')"></b-carousel-slide>
                <b-carousel-slide caption="Blogging" :img-src="require('@/assets/homepage/5.png')"></b-carousel-slide>
            </b-carousel>
        </div>
        <Programs />
        <BodyProfile />
    </div>
</template>

<script>
import Programs from '@/views/Home/Programs.vue';
import BodyProfile from '@/views/Home/BodyProfile.vue';

export default {
    name: 'Homepage',
    components: {
        Programs,
        BodyProfile
    }
}
</script>

<style lang="scss">
    #home {
        .carousel {
            height: 100vh;
            .carousel-caption {
                text-align: center;
                padding: 0;
                h3 {
                    font-size: 1.5em;
                    font-weight: 900;
                    font-style: italic;
                    text-transform: uppercase;
                }
            }
            .main-title {
                position: absolute;
                top: 50%;
                left: 50%;
                font-family: 'Barlow', sans-serif;
                font-weight: 900;
                transform: translate(-50%, -50%);
                z-index: 10;
                color: white;
                text-transform: uppercase;
                font-style: italic;
                h1 {
                    margin: 0;
                    line-height: 1;
                    font-weight: 900;
                }
                h3 {
                    font-weight: 900;
                }
            }
            .img-fluid {
                width: 100%;
                height: 100vh;
            }
        }
    }
</style>
