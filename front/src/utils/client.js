import axios from 'axios'
import handleStore from './localStore.js'

const cliente = axios.create({
    baseURL: 'http://localhost:3000',
    header: {
        'content-type': 'application/json'
    }
})

cliente.interceptors.request.use( (config) => {
    const empresa = handleStore.getValue('empresa')
    if (empresa) {
        config.headers['empresa-token'] = empresa.token
    }
    return config
})

export default cliente