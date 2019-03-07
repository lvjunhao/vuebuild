import Vue from 'vue'
import Vuex from 'vuex'

import formConfigs from './modules/layouts/formConfig.js'
<<<<<<< HEAD
import currentItem from './modules/layouts/currentItem.js'
=======
>>>>>>> d1eba4dc99d027d145efe129062f743c2f726ff5
import getters from './getters'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
<<<<<<< HEAD
        formConfigs,
        currentItem
=======
        formConfigs
>>>>>>> d1eba4dc99d027d145efe129062f743c2f726ff5
    },
    getters
})