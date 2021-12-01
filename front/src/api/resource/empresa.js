import api from '../api.js'

const empresaResource = {
    createEmpresa(params) {
        return new Promise( (resolve) => {
            api.post('/empresa/cadastrar', params).then( (res) => {
                resolve(res.data)
            }).catch( () => {

            })
        })
    },
    logEmpresa(params) {
        return new Promise( (resolve) => {
            api.post('/empresa/logar', params).then( (res) => {
                resolve(res.data)
            }).catch( () => {

            })
        })
    },
    createProduto(params) {
        return new Promise( (resolve) => {
            api.post('/produto/cadastrar', params).then( (res) => {
                resolve(res.data)
            }).catch( () => {

            })
        })
    },
    detailsEmpresa(idEmpresa) {
        return new Promise( (resolve) => {
            api.get(`/empresa/minha-empresa/${idEmpresa}`, {}).then( (res) => {
                resolve(res.data)
            }).catch( () => {

            })
        })
    },
    changeEmpresa(idEmpresa, params) {
        return new Promise( (resolve) => {
            api.put(`/empresa/alterar/${idEmpresa}`, params).then( (res) => {
                resolve(res.data)
            }).catch( () => {

            })
        })
    },
    listPedidosEmpresa(idEmpresa) {
        return new Promise( (resolve) => {
            api.get(`/pedido/lista/empresa/${idEmpresa}`, {}).then( res => {
                resolve(res.data)
            }).catch( () => {
                
            })
        })
    },
    listProdutosEmpresa(idEmpresa) {
        return new Promise( (resolve) => {
            api.get(`/empresa/${idEmpresa}/produtos`, {}).then( (res) => {
                resolve(res.data)
            }).catch( () => {

            })
        })
    },
    listProdutos() {
        return new Promise( (resolve) => {
            api.get('/produto/lista', {}).then( (res) => {
                resolve(res.data)
            }).catch( () => {

            })
        })
    },
    addProdutoEmpresa(idEmpresa, params) {
        return new Promise( (resolve) => {
            api.patch(`/empresa/adicionar-produto/${idEmpresa}`, params).then( (res) => {
                resolve(res.data)
            }).catch( () => {

            })
        })
    },
    updatePedido(idPedido, params) {
        return new Promise( (resolve) => {
            api.patch(`/pedido/alterar/${idPedido}`, params).then( res => {
                resolve(res.data)
            }).catch( () => {

            })
        })
    },
    deleteEmpresa(idEmpresa) {
        return new Promise( (resolve) => {
            api.delete(`/empresa/remover/${idEmpresa}`, {}).then( res => {
                resolve(res.data)
            }).catch( () => {

            })
        })
    },
    deleteProduto(idProduto) {
        return new Promise( (resolve) => {
            api.delete(`/produto/remover/${idProduto}`, {}).then( res => {
                resolve(res.data)
            }).catch( () => {

            })
        })
    },
    deleteProdutoEmpresa(idEmpresa, idProduto) {
        return new Promise( (resolve) => {
            api.delete(`/empresa/remover-produto/${idEmpresa}/${idProduto}`, {}).then( res => {
                resolve(res.data)
            }).catch( () => {

            })
        })
    }
}

export default empresaResource