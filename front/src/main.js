import { createApp } from 'vue'
import App from './App.vue'
import router from './route/router.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from './store/index.js'

const app = createApp(App);

app.use(ElementPlus)
app.use(router)
app.use(store)

app.mount('#app')