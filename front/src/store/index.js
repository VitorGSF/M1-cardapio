import { createStore } from 'vuex'
import Empresas from './modules/empresas.js'
import Pedidos from './modules/pedidos.js'

const store = createStore({
    modules: {
        Empresas,
        Pedidos
    }
})

export default store