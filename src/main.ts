import { createApp } from 'vue'
import { router } from '@/route/index'
import { createPinia } from 'pinia'
import ArcoVue from '@arco-design/web-vue'
import App from '@/App.vue'
import '@/style.css'
import '@arco-design/web-vue/dist/arco.css'

const pinia = createPinia()
const Root = createApp(App)

Root.use(router)
Root.use(ArcoVue)
Root.use(pinia)
Root.mount('#app')
