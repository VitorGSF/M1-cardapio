import PedidoResource from '../../api/resource/cliente.js'

const state = {
    empresas: [],
    empresa: {},
    produtos: [],
    produto: {},
    pedido: {}
}

const getters = {
    getEmpresas: (state) => state.empresas,
    getEmpresa: (state) => state.empresa,
    getProdutos: (state) => state.produtos,
    getProduto: (state) => state.produto,
    getPedido: (state) => state.pedido
}

const actions = {
    listarEmpresa({ commit }) {
        PedidoResource.listEmpresas().then( (res) => {
            commit('listaEmpresa', res.data)
        })
    },
    listarProdutoEmpresa({ commit }, id) {
        PedidoResource.listProdutosEmpresa(id).then( (res) => {
            commit('listaProdutosEmpresa', res.data)
        })
    },
    cadastraPedido({ commit }, dados) {
        PedidoResource.createPedido(dados).then( (res) => {
            commit('criarPedido', res.data)
        })
    }
}

const mutations = {
    listaEmpresa($state, payload) {
        $state.empresas = payload
    },
    listaProdutosEmpresa($state, payload) {
        $state.produtos = payload
    },
    criarPedido($state, payload) {
        $state.pedido = payload
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}