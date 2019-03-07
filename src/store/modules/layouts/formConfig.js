export default {
    state:{
<<<<<<< HEAD
        formDatas:[]
    },
    mutations:{
        SETCONFIGLIST: (state,data) => {
            state.formDatas.push(data);
=======
        id:'form',
        list:[]
    },
    mutations:{
        SETCONFIGLIST: (state,data) => {
            state.list = data;
>>>>>>> d1eba4dc99d027d145efe129062f743c2f726ff5
        }
    },
    actions:{
        setconfiglist({ commit }, data ) {
            commit('SETCONFIGLIST',data);
        }
    }
}