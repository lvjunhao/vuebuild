export default {
    state:{
        currentSelect:''
    },
    mutations:{
        CURRENTITEM: (state,data) => {
            state.currentSelect = data;
        }
    },
    actions:{
        setcurrentitem({ commit }, data) {
            commit('CURRENTITEM',data);
        }
    }
}