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
    pedido: {},
    empresaSelecionada: {}
}

const stateReset = {
    empresas: [],
    empresa: {},
    produtos: [],
    produto: {},
    cliente: {},
    pedidos: [],
    pedido: {},
    empresaSelecionada: {}
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
    },
    getEmpresaSelecionada: (state) => {
        return state.empresaSelecionada
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
            dispatch('listaProdutos')
        })
    },
    createPedido({ state, dispatch }, payload) {
        ClienteResource.createPedido({
            empresa: {
                _id: state.empresaSelecionada._id,
                nome: state.empresaSelecionada.nomeFantasia
            },
            produto: {
                _id: state.produto._id,
                nome: state.produto.nome
            },
            cliente: {
                _id: state.cliente._id,
                nome: state.cliente.nome,
                email: state.cliente.email,
                cep: state.cliente.cep,
                logradouro: state.cliente.logradouro,
                numero: state.cliente.numero,
                bairro: state.cliente.bairro,
                cidade: state.cliente.cidade,
                estado: state.cliente.estado,
                complemento: state.cliente.complemento,
                telefone: state.cliente.telefone
            },
            quantidade: payload.quantidade,
            status: payload.status
        }).then( () => {
            dispatch('')
        })
    },
    logEmpresa({ commit }, payload) {
        EmpresaResource.logEmpresa(payload).then( res => {
            Storage.changeValue('empresa-token', res.token)
            commit('setEmpresa', res.empresa)
        })
    },
    logCliente({ commit }, payload) {
        ClienteResource.logCliente(payload).then( res => {
            Storage.changeValue('cliente-token', res)
            commit('setCliente', res.cliente)
        })
    },
    updateEmpresa({ state, dispatch }, payload) {
        EmpresaResource.changeEmpresa(state.empresa._id, payload.value).then( () => {
            dispatch('listaEmpresa')
        })
    },
    updateCliente({ state, dispatch }, payload) {
        ClienteResource.updateCliente(state.cliente._id, payload.value).then( () => {
            dispatch('listaCliente')
        })
    },
    updatePedido({ dispatch }, payload) {
        console.log(payload)
        EmpresaResource.updatePedido(payload.id, {status: payload.value}).then(() => {
            dispatch('listaPedidosEmpresa')
        })
    },
    listaEmpresa({ state, commit }) {
        EmpresaResource.detailsEmpresa(state.empresa._id).then( res => {
            commit('setEmpresa', res)
        })
    },
    listaEmpresas({ commit }) {
        ClienteResource.listEmpresas().then( res => {
            commit('setEmpresas', res)
        })
    },
    listaCliente({ state, commit }) {
        ClienteResource.listCliente(state.cliente._id).then( res => {
            commit('setCliente', res)
        })
    },
    listaProdutos({ commit }) {
        EmpresaResource.listProdutos().then( res => {
            commit('setProdutos', res)
        })
    },
    adicionarProduto({ dispatch }, payload) {
        EmpresaResource.addProdutoEmpresa(state.empresa._id, payload).then( () => {
            dispatch('')
        })
    },
    selecionaEmpresa({ commit }, payload) {
        EmpresaResource.detailsEmpresa(payload).then( res => {
            commit('setEmpresaSelecionada', res)
        })
    },
    selecionaProduto({ commit }, payload) {
        ClienteResource.listProduto(payload._id).then( res => {
            commit('setProduto', res)
        })
    },
    listaProdutosEmpresa({ state, commit }) {
        EmpresaResource.listProdutosEmpresa(state.empresa._id).then( res => {
            commit('setProdutos', res.produtos)
        })
    },
    listaPedidosEmpresa({ state, commit }) {
        EmpresaResource.listPedidosEmpresa(state.empresa._id).then( res => {
            commit('setPedidos', res)
        })
    },
    listaPedidosCliente({ state, commit }) {
        ClienteResource.listPedidos(state.cliente._id).then( res => {
            commit('setPedidos', res)
        })
    },
    encerrarSessao({ commit }) {
        commit('setLogout', stateReset)
        Storage.clearStorage()
    }
}

const mutations = {
    setEmpresas(state, empresas) {
        state.empresas = empresas
    },
    setEmpresa(state, empresa) {
        state.empresa = empresa
    },
    setProdutos(state, produtos) {
        state.produtos = produtos
    },
    setProduto(state, produto) {
        state.produto = produto
    },
    setCliente(state, cliente) {
        state.cliente = cliente
    },
    setPedidos(state, pedidos) {
        state.pedidos = pedidos
    },
    setPedido(state, pedido) {
        state.pedido = pedido
    },
    setEmpresaSelecionada(state, empresaSelecionada) {
        state.empresaSelecionada = empresaSelecionada
    },
    setLogout(state, reset) {
        state = reset
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}