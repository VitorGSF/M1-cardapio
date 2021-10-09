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
            api.put(`/empresa/altera-minha-empresa/${idEmpresa}`, params).then( (res) => {
                resolve(res.data)
            }).catch( () => {

            })
        })
    },
    listProdutosEmpresa(idEmpresa) {
        return new Promise( (resolve) => {
            api.post(`/empresa/${idEmpresa}/produtos`, {}).then( (res) => {
                resolve(res.data)
            }).catch( () => {

            })
        })
    },
    listProdutos() {
        return new Promise( (resolve) => {
            api.post('/produto/produtos', {}).then( (res) => {
                resolve(res.data)
            }).catch( () => {

            })
        })
    },
    addProdutoEmpresa(idEmpresa, params) {
        return new Promise( (resolve) => {
            api.put(`/empresa/cadastra-produto-empresa/${idEmpresa}`, params).then( (res) => {
                resolve(res.data)
            }).catch( () => {

            })
        })
    }
    
    
}

export default empresaResource