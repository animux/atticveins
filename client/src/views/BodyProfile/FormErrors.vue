<template>
    <div id="errors">
        <ul v-for="(error, index) in errors" :key="index">
            <li>{{ error }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'FormErrors',
    props: {
        data: Object
    },
    data() {
      return {
          errors: []
      }  
    },
    watch: {
        errors: function(val) {
            if (val) this.$emit('errors', this.errors);
        }
    },
    methods: {
        checkErrors: function() {
            let template = 'Please provide your ';
            if (this.data.current_weight == null) this.errors.push(template + 'current weight')
            if (this.data.desired_weight == null) this.errors.push(template + 'desired weight')
            if (this.data.activity == null) this.errors.push(template + 'activity level')
            if (this.data.dob == null) this.errors.push(template + 'date of birth')
            if (this.data.email == null) this.errors.push(template + 'email')
            if (this.data.gender == null) this.errors.push(template + 'gender')
            if (this.data.height == null) this.errors.push(template + 'height')
            if (this.data.medical_issues == null) this.errors.push(template + 'medical issues')
            if (this.data.neck_size == null) this.errors.push(template + 'neck size')
            if (this.data.waist_size == null) this.errors.push(template + 'waist size')
            if (this.data.phone_number == null) this.errors.push(template + 'phone number')
            if (this.errors.length == 0) return false;
            else return true;
        }
    }
}
</script>

<style lang="scss" scoped>
    #errors {
        padding: 20px 20px;

    }
</style>