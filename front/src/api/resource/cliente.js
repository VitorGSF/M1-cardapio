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
    listEmpresas() {
        return new Promise( (resolve) => {
            api.get('/empresa/empresas', {}).then( (res) => {
                resolve(res.data)
            }).catch( () => {

            })
        })
    },
    listProdutosEmpresa(idEmpresa){
        api.get(`/empresa/${idEmpresa}/produtos`, {}).then( (res) => {
            resolve(res.data)
        }).catch( () => {
            
        })
    }
}

export default clienteResource