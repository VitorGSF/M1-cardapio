import { createStore } from 'vuex'
import Empresas from './cardapioApp.js'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
    modules: {
        Empresas
    },
    plugins: [createPersistedState()]
})

export default store