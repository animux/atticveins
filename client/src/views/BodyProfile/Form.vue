<template>
    <div id="form">
        <b-container>
            <b-form validated="true">
                
                <section v-if="steps == 1">
                    <h3>Step 1</h3>
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
                    <h3>Step 2</h3>
                    <b-form-group id="name" label="Age" label-for="name">
                        <b-form-input id="name=input" type="text" placeholder="Enter DOB" required></b-form-input>
                    </b-form-group>
                    <b-form-group id="name" label="Name" label-for="name">
                        <b-form-input id="name=input" type="text" placeholder="Enter Name" required></b-form-input>
                    </b-form-group>
                    <b-form-group id="name" label="Name" label-for="name">
                        <b-form-input id="name=input" type="text" placeholder="Enter Name" required></b-form-input>
                    </b-form-group>
                </section>

                <section v-if="steps == 3">
                    <h3>Step 3</h3>
                    <b-form-group id="name" label="DOB" label-for="name">
                        <b-form-input id="name=input" type="text" placeholder="Enter Age" required></b-form-input>
                    </b-form-group>
                    <b-form-group id="name" label="Name" label-for="name">
                        <b-form-input id="name=input" type="text" placeholder="Enter Name" required></b-form-input>
                    </b-form-group>
                    <b-form-group id="name" label="Name" label-for="name">
                        <b-form-input id="name=input" type="text" placeholder="Enter Name" required></b-form-input>
                    </b-form-group>
                </section>

                <div class="buttons">
                    <button v-if="steps != 1" @click.prevent="prevStep()">Previous Step</button>
                    <button v-if="steps != totalsteps" @click.prevent="nextStep()">Next Step</button>
                    <button v-if="steps == totalsteps" @click.prevent="submit()" type="submit">Submit</button> 
                </div>

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
            form: {}
        }
    },
    methods: {
        nextStep: function() {
            this.steps++;
        },
        prevStep: function() {
            this.steps--
        },
        submit: function() {
            return;
        }
    }
}
</script>

<style lang="scss" scoped>
    #form {
        width: 50%;
        margin: 0 auto;
        color: white;
        form {
            background-color: #1A1A1A;
            border-radius: 5px;
            box-shadow: 0 8px 4em -6px #090909;
            padding: 40px 40px;
        }
        .buttons {
            text-align: center;
        }
    }
</style>