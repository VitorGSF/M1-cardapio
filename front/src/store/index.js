import { createStore } from 'vuex'
import Empresas from './cardapioApp.js'

const store = createStore({
    modules: {
        Empresas
    }
})

export default store