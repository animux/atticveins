<template>
    <div class="form__group field">
        <input v-if="type == 'input'" v-model="inputData" @change="emitToParent" class="form__field" :placeholder="placeholder" :id="_id" required />
        <input v-if="type == 'date'" type="date" v-model="inputData" @change="emitToParent" class="form__field" :placeholder="placeholder" :id="_id" required />
        <textarea v-if="type == 'textarea'" class="form__field" v-model="inputData" @change="emitToParent" :placeholder="placeholder" :id="_id" rows="3" required />
        <select v-if="type == 'select'" class="form__field" v-model="inputData" @change="emitToParent">
            <option v-for="(option, index) in data" :key="index">{{ option.text }}</option>
        </select>
        <label class="form__label">{{ placeholder }}</label>
    </div>
</template>

<script>
export default {
    name: 'Form',
    props: {
        type: String,
        placeholder: String,
        _id: String,
        data: Array
    },
    data() {
        return {
            inputData: null
        }
    },
    methods: {
        emitToParent() {
            this.$emit('data', this.inputData)
        }
    }
}
</script>

<style lang="scss">
    $primary: #B12E21;
    $secondary: #C34632;
    $white: #fff;
    $gray: #9b9b9b;
    .form__group {
        position: relative;
        padding: 15px 0 0;
        margin-top: 10px;
        width: 100%;
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

</style>