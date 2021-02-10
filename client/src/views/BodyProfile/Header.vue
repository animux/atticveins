<template>
    <div id="header">
        <b-jumbotron>
            <template #header>Get your Body Profile Now</template>
            <template #lead>Complete the form to get your free body profile!</template>
        </b-jumbotron>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped lang="scss">
    #header {
        color: white;
        font-family: 'Barlow', sans-serif;
        text-align: center;
        .jumbotron {
            background-color: #131313 !important;
            h1 {
                font-weight: 900;
                padding-bottom: 10px;
            }
            .lead {
                font-weight: 900;
                margin: 10px 0;
            }
        }
    }
</style>