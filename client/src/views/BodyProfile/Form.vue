<template>
    <div id="form">
        <b-container>
            <b-form @submit="onSubmit" validated="true">
                <b-form-group id="name" label="Name" label-for="name">
                    <b-form-input id="name=input" type="text" placeholder="Enter Name" required></b-form-input>
                </b-form-group>
            </b-form>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'Form'
}
</script>

<style lang="scss" scoped>

</style>