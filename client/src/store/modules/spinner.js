export default {
    state: {
        value: false
    },
    getters: {
        value: (state) => state.value
    },
    mutations: {
        setSpinner: (state, boolean) => state.value = boolean
    },
    actions: {},
    namespaced: true
}