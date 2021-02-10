import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from '@/views/Home/Homepage.vue';
import BodyProfile from '@/views/BodyProfile/BodyProfile.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/body-profile',
            name: 'bodyprofile',
            component: BodyProfile
        }
    ]
})

export default router;