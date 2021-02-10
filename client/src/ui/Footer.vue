<template>
    <div id="footer">
        <p>&copy; Copyright 2021 | <span class="bold">Attic Veins</span></p>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
    #footer {
        height: 8vh;
        text-align: center;
        background-color: #0e0e0e;
        p {
            color: white;
            padding: 1.1em 0;
            font-family: 'Barlow', sans-serif;
            font-weight: 900;
            letter-spacing: 1.5;
            font-size: 1.1em;
        }
    }
</style>