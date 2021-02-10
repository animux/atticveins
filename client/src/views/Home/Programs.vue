<template>
    <div id="programs">
        <div class="grid-wrapper">
            <div class="images">
                <img class="img-fluid" :src="require('@/assets/programs/1.png')" />
                <img class="img-fluid" :src="require('@/assets/programs/2.png')" />
                <img class="img-fluid" :src="require('@/assets/programs/3.png')" />
                <img class="img-fluid" :src="require('@/assets/programs/4.png')" />
            </div>
            <div class="text">
                <div class="types">
                    <h1 class="display-1">Programs</h1>
                    <h4>Personal Trainer - Meal Plans - Workouts</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Programs'
}
</script>

<style scoped lang="scss">
    #programs {
        background-image: url('../../assets/programs/1. Background.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        .grid-wrapper {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            .text {
                position: relative;
                .types {
                    color: white;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    margin: 0 auto;
                    text-transform: uppercase;
                    text-align: center;
                    h1 {
                        font-family: 'Barlow', sans-serif;
                        font-weight: 900;
                        font-style: italic;
                        margin: 0;
                        padding: 0;
                    }
                    h4 {
                        font-family: 'Barlow', sans-serif;
                        font-weight: 900;
                        letter-spacing: -1.5px;
                    }
                }
            }
        }
        @media (max-width: 768px) {
            .grid-wrapper {
                grid-template-columns: repeat(1, 1fr);
                .text {
                    position: static;
                    .types {
                        position: static;
                        top: 0;
                        left: 0;
                        transform: initial;
                        margin: 20px;
                        h1 {
                            font-size: 4em;
                        }
                        h4 {
                            font-size: 1em;
                            letter-spacing: -0.75px;
                        }
                    }
                }
            }
        }

    }
</style>