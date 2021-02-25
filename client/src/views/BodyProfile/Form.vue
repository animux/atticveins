<template>
    <div id="form">
        <b-container>
            <div class="title">
                <h3 v-bind:class="{ active: this.steps == 1 }">About your Body</h3>
                <h3 v-bind:class="{ active: this.steps == 2 }">About yourself</h3>
            </div>
            <b-form>
                <section v-if="steps == 1">
                    <Form type="input" placeholder="Current Weight" _id="current_weight" />
                    <Form type="input" placeholder="Desired Weight" _id="desired_weight" />
                    <Form type="input" placeholder="Height" _id="height" />
                    <Form type="select" :data="form.activity" v-model="form.activity.selected" placeholder="Activity Level" _id="activity_level" />
                    <Form type="input" placeholder="Neck Size" _id="neck_size" />
                    <Form type="input" placeholder="Waist Size" _id="waist_size" />
                    <Form type="textarea" placeholder="Medical Issues (if any)" _id="medical_issues" />
                </section>

                <section v-if="steps == 2">
                    <Form type="input" placeholder="Name" _id="name" />
                    <Form type="select" :data="{ options: [ { value: null, text: 'Please select a gender' }, { value: 0, text: 'Male' },  { value: 1, text: 'Female' } ] }" placeholder="Gender" _id="gender" />
                    <Form type="date" placeholder="Date of Birth" _id="dob" />
                    <Form type="input" placeholder="Email" _id="email" />
                    <Form type="input" placeholder="Phone Number" _id="phone_number" />
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
import Form from '@/components/Form.vue';

export default {
    name: 'BodyProfile-Form',
    components: {
        Form
    },
    data() {
        return {
            totalsteps: 2,
            steps: 1,
            form: {     
                activity: {
                    selected: null,
                    options: [
                        { value: null, text: 'Please select an option' },
                        { value: '1', text: 'Sedentary' },
                        { value: '2', text: 'Workout 1 or 2 days a week' },
                        { value: '3', text: 'Active workout 4 to 5  days a week' },
                        { value: '4', text: 'Intense workout every week' },      
                    ]
                },
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
    $primary: #B12E21;
    $secondary: #C34632;
    $white: #fff;
    $gray: #9b9b9b;
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
                border-bottom: 3px solid gray;
                padding: 15px 0;
                transition: ease-in 0.3s;
                margin-bottom: 20px;
                text-transform: uppercase;
            }
            .active {
                border-width: 3px;
                border-image: linear-gradient(to right, $primary,$secondary);
                border-image-slice: 1;
                background: -webkit-linear-gradient($secondary, $primary);
                -webkit-background-clip: text;
                background-clip: $white;
                -webkit-text-fill-color: transparent;
                transition: ease-out 0.3s;
                border-bottom: 3px solid;
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
    @media screen and (max-width: 760px) {
        #form {
            width: 100%;
        }
    }
</style>