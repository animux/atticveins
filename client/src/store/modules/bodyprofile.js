export default {
    state: {
        form: {
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
    },
    getters: {
        formData: (state) => state.form.data
    },
    mutations: {
        setData: (state, payload) => state.form.data = payload
    },
    action: {
        setData: (state, data) => state.commit('setData', data)
    },
    namespaced: true
}