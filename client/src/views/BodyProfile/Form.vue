<template>
    <div id="form">
        <b-container>
            <div class="title">
                <h3 v-bind:class="{ active: this.steps == 1 }">About your Body</h3>
                <h3 v-bind:class="{ active: this.steps == 2 }">About yourself</h3>
            </div>
            <b-form>
                <section v-if="steps == 1">
                    <b-row>
                        <b-col lg="6">
                            <b-form-group id="current-weight" label="Current Weight" label-for="weight">
                                <b-form-input id="current-weight-input" type="text" placeholder="Enter your current weight" required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col lg="6">
                            <b-form-group id="desired-weight" label="Desired Weight" label-for="desired-weight">
                                <b-form-input id="desired-weight-input" type="text" placeholder="Enter your desired weight" required></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-form-group id="height" label="Height" label-for="height">
                        <b-form-input id="height-input" type="text" placeholder="Enter your height" required></b-form-input>
                    </b-form-group>
                    <b-form-group id="name" label="Activity Level" label-for="name">
                        <b-form-select :options="form.activityOption"></b-form-select>
                    </b-form-group>
                    <b-row>
                        <b-col lg="6">
                            <b-form-group id="name" label="Neck Size" label-for="neck-size">
                                <b-form-input id="neck-size-input" type="text" placeholder="Enter your neck size" required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col lg="6">
                            <b-form-group id="name" label="Waist Size" label-for="waist-size">
                                <b-form-input id="waist-size-input" type="text" placeholder="Enter your weist size" required></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>


                    <b-form-group id="name" label="Medical Issues (if any)" label-for="medical-issue">
                        <b-form-textarea
                            id="textarea"
                            placeholder="Enter your medical issue (if any)"
                            rows="3"
                            max-rows="6"
                        ></b-form-textarea>
                    </b-form-group>
                </section>

                <section v-if="steps == 2">
                    <b-form-group id="name" label="Name" label-for="name">
                        <b-form-input id="name-input" type="text" placeholder="Enter your name" required></b-form-input>
                    </b-form-group>
                    <b-form-group id="phone-number" label="Phone Number" label-for="phone-number">
                        <b-form-input id="phone-number-input" type="text" placeholder="Enter your phone number" required></b-form-input>
                    </b-form-group>
                    <b-form-group id="email" label="Email" label-for="email">
                        <b-form-input id="email-input" type="text" placeholder="Enter your email" required></b-form-input>
                    </b-form-group>
                    <b-form-group id="age" label="Age" label-for="age">
                        <b-form-input id="age-input" type="text" placeholder="Enter your age" required></b-form-input>
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
            form: {     
                activityOption: [
                    { value: null, text: 'Please select an option' },
                    { value: '1', text: 'Sedentary' },
                    { value: '2', text: 'Workout 1 or 2 days a week' },
                    { value: '3', text: 'Active workout 4 to 5  days a week' },
                    { value: '4', text: 'Intense workout every week' },
                ],
                data: {}
            }
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
        text-align: center;
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