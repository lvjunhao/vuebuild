import Vue from 'vue'
import Vuex from 'vuex'

import formConfigs from './modules/layouts/formConfig.js'
import currentItem from './modules/layouts/currentItem.js'
import getters from './getters'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        formConfigs,
        currentItem
    },
    getters
})