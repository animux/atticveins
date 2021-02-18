<template>
    <div id="form">
        <b-container>
            <div class="title">
                <h3 v-bind:class="{ active: this.steps == 1 }">About your Body</h3>
                <h3 v-bind:class="{ active: this.steps == 2 }">About yourself</h3>
            </div>
            <b-form validated="true">
                <section v-if="steps == 1">
                    <b-form-group id="height" label="Height" label-for="height">
                        <b-form-input id="height-input" type="text" placeholder="Enter your height" required></b-form-input>
                    </b-form-group>
                    <b-form-group id="current-weight" label="Current Weight" label-for="weight">
                        <b-form-input id="current-weight-input" type="text" placeholder="Enter your current weight" required></b-form-input>
                    </b-form-group>
                    <b-form-group id="desired-weight" label="Desired Weight" label-for="desired-weight">
                        <b-form-input id="desired-weight-input" type="text" placeholder="Enter your desired weight" required></b-form-input>
                    </b-form-group>
                    <b-form-group id="name" label="Activity Level" label-for="name">
                        <b-form-input id="name=input" type="text" placeholder="Enter Name" required></b-form-input>
                    </b-form-group>
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
            totalsteps: 2,
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
        .title {
            color: gray;
            text-align: center;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            h3 {
                border-bottom: 1px solid gray;
                padding: 10px 0;
                transition: ease-in 0.3s;
                margin-bottom: 20px;
                text-transform: uppercase;
            }
            .active {
                color: white;
                transition: ease-out 0.3s;
                border-bottom: 1px solid white;
            }
        }
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