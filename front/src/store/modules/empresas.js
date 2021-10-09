import EmpresaResource from '../../api/resource/empresa.js'

const state = {
    empresas: [],
    empresa: {},
    produtos: [],
    produto: {}
}

const getters = {
    getEmpresas: (state) => state.empresas,
    getEmpresa: (state) => state.empresa,
    getProdutos: (state) => state.produtos,
    getProduto: (state) => state.produto
}

const actions = {
    cadastrarEmpresa({ dispatch }, data) {
        EmpresaResource.createEmpresa(data).then( () => {
            dispatch('criarEmpresa')
        })
    },
    cadastrarProduto({ dispatch }, dados) {
        EmpresaResource.createProduto(dados).then( () => {
            dispatch('listarProduto')
        })
    },
    cadastrarProdutoEmpresa({ dispatch }, dados) {
        EmpresaResource.addProdutoEmpresa(dados).then( () => {
            dispatch('detalhesEmpresa')
        })
    },
    detalhesEmpresa({ commit }, id) {
        EmpresaResource.detailsEmpresa(id).then( (res) => {
            commit('detalheEmpresa', res.data)
        })
    },
    alterarEmpresa({ commit }, id, dados) {
        EmpresaResource.changeEmpresa(id, dados).then( (res) => {
            commit('alteraEmpresa', res.data)
        })
    },
    listarProduto({ commit }) {
        EmpresaResource.listProdutos().then( (res) => {
            commit('listaProduto', res.data)
        })
    },
    listarProdutoEmpresa({ commit }, id) {
        EmpresaResource.listProdutosEmpresa(id).then( (res) => {
            commit('listaProdutoEmpresa', res.data)
        })
    }
}

const mutations = {
    detalheEmpresa($state, payload) {
        $state.empresa = payload
    },
    alteraEmpresa($state, payload) {
        $state.empresa = payload
    },
    listaProduto($state, payload) {
        $state.produtos = payload
    },
    listaProdutoEmpresa($state, payload) {
        $state.produtos = payload
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}