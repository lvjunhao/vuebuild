export default {
    state:{
        id:'form',
        list:[]
    },
    mutations:{
        SETCONFIGLIST: (state,data) => {
            state.list = data;
        }
    },
    actions:{
        setconfiglist({ commit }, data ) {
            commit('SETCONFIGLIST',data);
        }
    }
}