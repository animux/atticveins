<template>
    <div id="mealplans">
        <b-container>
            <div class="wrapper">
                <div class="text">
                    <h1>Meal Plans</h1>
                    <p>Our demand of serving healthy food is to get you the best of meal plans and recipes without any hustle. Therefore, our team works tirelessly to ensure that we can provide you multiple options and calculated macros and calories for your daily meals, no matter what are your cooking experience, taste or deitary preference. Because healthy means cooking at home, authentic food and satisfying.</p>
                </div>
                <b-row>
                    <b-col lg="3"><img class="img-fluid" :src="require('@/assets/mealplan/Tag1.png')" /></b-col>
                    <b-col lg="3"><img class="img-fluid" :src="require('@/assets/mealplan/Tag2.png')" /></b-col>
                    <b-col lg="3"><img class="img-fluid" :src="require('@/assets/mealplan/Tag3.png')" /></b-col>
                    <b-col lg="3"><img class="img-fluid" :src="require('@/assets/mealplan/Tag4.png')" /></b-col>
                </b-row>
                <h1 class="category">Select your category</h1>
            </div>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'Meal Plans'
}
</script>

<style scoped lang="scss">
    #mealplans {
        background-image: url('../../assets/mealplan/1. Background.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        color: white;
        .wrapper {
            padding-top: 5em;
            padding-bottom: 5em;
            h1 {
                font-weight: 900;
                text-transform: uppercase;
                font-style: italic;
            }
            .category {
                color: #19f752;
                text-align: center;
                margin: 10px 0;
            }
        }
    }
</style>