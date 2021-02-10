<template>
    <div id="body-profile">
        <Header />
        <Form />
    </div>
</template>

<script>
import Header from '@/views/BodyProfile/Header.vue';
import Form from '@/views/BodyProfile/Form.vue';

export default {
    name: 'BodyProfile',
    components: {
        Header,
        Form
    }
}
</script>

<style scoped lang="scss">
</style>