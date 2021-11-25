import api from '../api.js'

const clienteResource = {
    createPedido(params) {
        return new Promise( (resolve) => {
            api.post('/pedido/cadastrar', params).then( (res) => {
                resolve(res.data)
            }).catch( () => {

            })
        })
    },
    createCliente(params) {
        return new Promise( (resolve) => {
            api.post('/cliente/cadastrar', params).then( (res) => {
                resolve(res.data)
            }).catch( () => {

            })
        })
    },
    updateCliente(idCliente, params) {
        return new Promise( (resolve) => {
            api.post(`/cliente/alterar/${idCliente}`, params).then( (res) => {
                resolve(res.data)
            }).catch( () => {

            })
        })
    },
    logCliente(params) {
        return new Promise( (resolve) => {
            api.post('/cliente/logar', params).then( (res) => {
                resolve(res.data)
            }).catch( () => {

            })
        })
    },
    listCliente(idCliente) {
        return new Promise( (resolve) => {
            api.get(`/cliente/meu-perfil/${idCliente}`, {}).then( (res) => {
                resolve(res.data)
            }).catch( () => {

            })
        })
    },
    listEmpresas() {
        return new Promise( (resolve) => {
            api.get('/empresa/empresas', {}).then( (res) => {
                resolve(res.data)
            }).catch( () => {

            })
        })
    },
    listProduto(idProduto){
        return new Promise( (resolve) => {
            api.get(`/produto/produto/${idProduto}`, {}).then( (res) => {
                resolve(res.data)
            }).catch( () => {
            })
        })
    },
    listPedidos(idCliente) {
        return new Promise( (resolve) => {
            api.get(`/pedido/lista/cliente/${idCliente}`, {}).then( res => {
                resolve(res.data)
            }).catch(() => {

            })
        })
    },
    listPedido(idPedido) {
        return new Promise( (resolve) => {
            api.get(`/pedido/${idPedido}`, {}).then( res => {
                resolve(res.data)
            }).catch( () => {
                
            })
        })
    },
    deletePedido(idPedido) {
        return new Promise( (resolve) => {
            api.delete(`/pedido/remover/${idPedido}`, {}).then( res => {
                resolve(res.data)
            }).catch( () => {

            })
        })
    },
    deleteCliente(idCliente) {
        return new Promise( (resolve) => {
            api.delete(`/cliente/remover/${idCliente}`, {}).then( res => {
                resolve(res.data)
            }).catch( () => {
                
            })
        })
    },
    pagamento(params) {
        return new Promise( (resolve) => {
            api.post('/pagamento/pagar', params).then( res => {
                resolve(res.data)
            }).catch( () => {

            })
        })
    }
}

export default clienteResource