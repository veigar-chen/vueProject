import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import TopHead from "@/components/topHead.vue"
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import GoodsShow from './components/GoodsShow.vue'
import MascotShow from './components/MascotShow.vue'

axios.defaults.baseURL = 'http://localhost:8888'
axios.defaults.withCredentials = true

Vue.prototype.axios = axios

Vue.use(ElementUI);
//定义全局组件
Vue.component("top-head", TopHead)

Vue.component('goods-show', GoodsShow)

Vue.component('mascot-show',MascotShow)


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')