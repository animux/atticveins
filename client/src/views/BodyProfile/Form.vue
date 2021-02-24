<template>
    <div id="form">
        <b-container>
            <div class="title">
                <h3 v-bind:class="{ active: this.steps == 1 }">About your Body</h3>
                <h3 v-bind:class="{ active: this.steps == 2 }">About yourself</h3>
            </div>
            <b-form>
                <section v-if="steps == 1">
                    <div class="form__group field">
                        <input type="input" class="form__field" placeholder="Current Weight" id='current_weight' required />
                        <label class="form__label">Current Weight</label>
                    </div>
                    <div class="form__group field">
                        <input type="input" class="form__field" placeholder="Desired Weight" id='desired_weight' required />
                        <label class="form__label">Desired Weight</label>
                    </div>
                    <div class="form__group field">
                        <input type="input" class="form__field" placeholder="Height" id='height' required />
                        <label class="form__label">Height</label>
                    </div>
                    <div class="form__group field">
                        <select class="form__field" id="acitivity_level" v-model="form.activity.selected" required>
                            <option v-for="(option, index) in form.activity.options" :key="index">{{ option.text }}</option>
                        </select>
                        <label class="form__label">Activity Level</label>
                    </div>
                    <div class="form__group field">
                        <input type="input" class="form__field" placeholder="Neck Size" id='neck_size' required />
                        <label class="form__label">Neck Size</label>
                    </div>
                    <div class="form__group field">
                        <input type="input" class="form__field" placeholder="Waist Size" id='waist_size' required />
                        <label class="form__label">Waist Size</label>
                    </div>

                    <div class="form__group field">
                        <textarea id="medical_issues" class="form__field" placeholder="Medical Issues" rows="3" required />
                        <label class="form__label">Medical Issues (if any)</label>
                    </div>
                </section>

                <section v-if="steps == 2">
                    <div class="form__group field">
                        <input type="input" class="form__field" placeholder="Name" id="name" required />
                        <label class="form__label">Name</label>
                    </div>
                    <div class="form__group field">
                        <select class="form__field" id="gender" required>
                            <option selected>Please select your gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                        <label class="form__label">Gender</label>

                    </div>
                    <div class="form__group field">
                        <input type="date" class="form__field" placeholder="Date of Birth" id="dob" required />
                        <label class="form__label">Date of birth</label>
                    </div>
                    <div class="form__group field">
                        <input type="input" class="form__field" placeholder="Email" id="email" required />
                        <label class="form__label">Email</label>
                    </div>
                    <div class="form__group field">
                        <input type="input" class="form__field" placeholder="Phone Number" id="phone-number" required />
                        <label class="form__label">Phone Number</label>
                    </div>
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
            .form__group {
                position: relative;
                padding: 15px 0 0;
                margin-top: 10px;
                width: 100%;
            }

            .form__field {
                font-family: 'Barlow', sans-serif, !important;
                width: 100%;
                border: 0;
                border-bottom: 2px solid $gray;
                outline: 0;
                font-size: 1rem;
                color: $white;
                padding: 15px 0;
                background: transparent;
                transition: border-color 0.2s;

                &::placeholder {
                    color: transparent;
                }

                &:placeholder-shown ~ .form__label {
                    font-size: 1.3rem;
                    cursor: text;
                    top: 10px;
                }
            }

            .form__label {
                position: absolute;
                top: 0;
                display: block;
                transition: 0.2s;
                font-size: 0.7rem;
                color: $gray;
            }

            .form__field:focus {
                ~ .form__label {
                    position: absolute;
                    top: 0;
                    display: block;
                    transition: 0.2s;
                    font-size: 1rem;
                    color: $primary;
                    font-weight:700;    
                }
                padding-bottom: 5px;  
                font-weight: 700;
                border-width: 3px;
                border-image: linear-gradient(to right, $primary,$secondary);
                border-image-slice: 1;
            }
            .form__field, select {
                &:required,&:invalid { box-shadow:none; }
            }            
            select {
                background: transparent;
                outline: 0;
                border: 0;
                border-bottom: 2px solid $gray;
                font-size: 1rem;
                transition: border-color 0.2s;
                option {
                    color: black;
                }
            }
            select:focus {
                outline: 0 !important;
                padding-bottom: 5px;
                font-weight: 700;
                border-width: 3px;
                border-image: linear-gradient(to right, $primary,$secondary);
                border-image-slice: 1;
            }
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