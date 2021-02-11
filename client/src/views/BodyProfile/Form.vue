<template>
    <div id="form">
        <b-container>
            <b-form @submit="onSubmit" validated="true">
                
                <section v-if="steps == 1">
                    <b-form-group id="name" label="Name" label-for="name">
                        <b-form-input id="name=input" type="text" placeholder="Enter Name" required></b-form-input>
                    </b-form-group>
                    <b-form-group id="name" label="Name" label-for="name">
                        <b-form-input id="name=input" type="text" placeholder="Enter Name" required></b-form-input>
                    </b-form-group>
                    <b-form-group id="name" label="Name" label-for="name">
                        <b-form-input id="name=input" type="text" placeholder="Enter Name" required></b-form-input>
                    </b-form-group>
                </section>

                <section v-if="steps == 2">
                    
                </section>
            </b-form>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'Form',
    data() {
        return {
            totalsteps: 3,
            steps: 1,
            form: {

            }
        }
    }
}
</script>

<style lang="scss" scoped>
    #form {
        position: relative;
        width: 50%;
        margin: 0 auto;
        color: white;
        form {
            background-color: #1A1A1A;
            border-radius: 5px;
            box-shadow: 0 8px 4em -6px #090909;
            padding: 40px 40px;
        }
    }
</style>