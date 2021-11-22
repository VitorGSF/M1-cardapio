import EmpresaResource from '../api/resource/empresa.js'
import ClienteResource from '../api/resource/cliente.js'
import Storage from '../utils/localStore.js'

const state = {
    empresas: [],
    empresa: {},
    produtos: [],
    produto: {},
    cliente: {},
    pedidos: [],
    pedido: {}
}

const getters = {
    getEmpresas: (state) => {
        return state.empresas
    },
    getEmpresa: (state) => {
        return state.empresa
    },
    getProdutos: (state) => {
        return state.produtos
    },
    getProduto: (state) => {
        return state.produto
    },
    getCliente: (state) => {
        return state.cliente
    },
    getPedidos: (state) => {
        return state.pedidos
    },
    getPedido: (state) => {
        return state.pedido
    }
}

const actions = {
    createEmpresa({ dispatch }, payload) {
        EmpresaResource.createEmpresa(payload).then( () => {
            dispatch('')
        })
    },
    createCliente({ dispatch }, payload) {
        ClienteResource.createCliente(payload).then( () => {
            dispatch('')
        })
    },
    createProduto({ dispatch }, payload) {
        EmpresaResource.createProduto(payload).then( () => {
            dispatch('')
        })
    },
    createPedido({ state, dispatch }, payload) {
        ClienteResource.createPedido({
            empresa: state.empresa,
            produto: state.produto,
            cliente: state.cliente,
            status: payload
        }).then( () => {
            dispatch('')
        })
    },
    logEmpresa({ dispatch }, payload) {
        EmpresaResource.logEmpresa(payload).then( res => {
            Storage.changeValue('empresa-token', res)
            dispatch('')
        })
    },
    logCliente({ dispatch }, payload) {
        ClienteResource.logCliente(payload).then( res => {
            Storage.changeValue('cliente-token', res)
            dispatch('')
        })
    },
    listaEmpresas() {

    },
    listaEmpresa() {

    },
    listaCliente() {

    },
    listaProdutos() {

    },
    listaPedidos() {

    }
}

const mutations = {
    
}

export default {
    state,
    getters,
    actions,
    mutations
}