<template>
    <div id="form">
        <b-container>
            <div class="title">
                <h3 v-bind:class="{ active: this.steps == 1 }">About your Body</h3>
                <h3 v-bind:class="{ active: this.steps == 2 }">About yourself</h3>
            </div>
            <b-form>
                <section v-if="steps == 1">
                    <Form type="input" @data="value =>  { form.data.current_weight = value }" placeholder="Current Weight" _id="current_weight" />
                    <Form type="input" @data="value =>  { form.data.desired_weight = value }" placeholder="Desired Weight" _id="desired_weight" />
                    <Form type="input" @data="value =>  { form.data.height = value }" placeholder="Height" _id="height" />
                    <Form type="select" @data="value => { form.data.acitivtiy = value }" :data="form.activity.options" v-model="form.activity.selected" placeholder="Activity Level" _id="activity_level" />
                    <Form type="input" @data="value =>  { form.data.neck_size = value }" placeholder="Neck Size" _id="neck_size" />
                    <Form type="input" @data="value =>  { form.data.waist_size = value }" placeholder="Waist Size" _id="waist_size" />
                    <Form type="textarea" @data="value =>  { form.data.medical_issues = value }" placeholder="Medical Issues (if any)" _id="medical_issues" />
                </section>

                <section v-if="steps == 2">
                    <Form type="input" @data="value =>  { form.data.name = value }" placeholder="Name" _id="name" />
                    <Form type="select" @data="value =>  { form.data.gender = value }" :data="form.gender.options" placeholder="Gender" _id="gender" />
                    <Form type="date" @data="value =>  { form.data.dob = value }" placeholder="Date of Birth" _id="dob" />
                    <Form type="input" @data="value =>  { form.data.email = value }" placeholder="Email" _id="email" />
                    <Form type="input" @data="value =>  { form.data.phone_number = value }" placeholder="Phone Number" _id="phone_number" />
                </section>
                <h3>{{ form.data }}</h3>
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
import { mapGetters } from 'vuex';

export default {
    name: 'BodyProfile-Form',
    components: {
        Form
    },
    computed: mapGetters('bodyprofile', ['formData']),
    data() {
        return {
            totalsteps: 2,
            steps: 1,
            form: {     
                activity: {
                    options: [
                        { value: null, text: 'Please select an option' },
                        { value: '1', text: 'Sedentary' },
                        { value: '2', text: 'Workout 1 or 2 days a week' },
                        { value: '3', text: 'Active workout 4 to 5  days a week' },
                        { value: '4', text: 'Intense workout every week' },      
                    ]
                },
                gender: {
                    options: [
                        { value: null, text: 'Please select an option' },
                        { value: 0, text: 'Male' },
                        { value: 1, text: 'Female' }
                    ]
                },
                data: {
                    current_weight: null,
                    desired_weight: null,
                    height: null,
                    activity: null,
                    neck_size: null,
                    waist_size: null,
                    medical_issues: null,
                    name: null,
                    gender: null,
                    dob: null,
                    email: null,
                    phone_number: null
                }
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
        },
        FormData: function(value) {
            console.log(value);
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