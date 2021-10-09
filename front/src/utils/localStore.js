export default {
    getValue(key) {
        let item = window.localStorage.getItem(key)
        item = JSON.parse(item)
        if (item) {
            return item
        }
        return null
    },
    changeValue(key, value) {
        if (value) {
            let convertValue = JSON.stringify(value)
            window.localStorage.setItem(key, convertValue)
        }
    }
}