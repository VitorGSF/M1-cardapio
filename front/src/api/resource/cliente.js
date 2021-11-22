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
    logCliente(params) {
        return new Promise( (resolve) => {
            api.post('/cliente/logar', params).then( (res) => {
                resolve(res.data)
            }).catch( () => {

            })
        })
    },
    listEmpresas() {
        return new Promise( (resolve) => {
            api.get('/empresa/lista', {}).then( (res) => {
                resolve(res.data)
            }).catch( () => {

            })
        })
    },
    listProdutosEmpresa(idEmpresa){
        return new Promise( (resolve) => {
            api.get(`/empresa/${idEmpresa}/produtos`, {}).then( (res) => {
                resolve(res.data)
            }).catch( () => {
                
            })
        })
    }
}

export default clienteResource