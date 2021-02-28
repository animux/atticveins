import Vue from 'vue';
import Vuex from 'vuex';

import bodyprofile from './modules/bodyprofile.js';
import spinner from './modules/spinner.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        bodyprofile,
        spinner
    }
})