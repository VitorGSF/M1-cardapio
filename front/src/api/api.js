import client from '../utils/client.js'

const apiClient = {
    get(url, query) {
        return client.get(url, query)
    },
    post(url, parameters) {
        return client.post(url, parameters)
    },
    put(url, parameters) {
        return client.put(url, parameters)
    },
    delete(url, parameters) {
        return client.delete(url, parameters)
    }
}

export default apiClient