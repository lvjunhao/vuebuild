export default {
    state: {
        vv:''
    },
    mutations: {
        SETXX: function (state, v) {
            state.vv = v;
        }
    },
    actions: {
        setxx: function ({ commit }, v) {
            commit("SETXX", v)
        }
    }
}