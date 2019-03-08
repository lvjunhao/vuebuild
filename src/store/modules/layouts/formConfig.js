export default {
    state:{
        formDatas:[]
    },
    mutations:{
        SETCONFIGLIST: (state,data) => {
            state.formDatas.push(data);
        }
    },
    actions:{
        setconfiglist({ commit }, data ) {
            commit('SETCONFIGLIST',data);
        }
    }
}