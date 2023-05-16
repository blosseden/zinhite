import { createStore } from 'vuex'
import modules from './modules'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
    modules,
    plugins: [ createPersistedState({
        paths:['temp', 'treeMenu'],
    })]
})