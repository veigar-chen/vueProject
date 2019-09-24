import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'

//引入全局组件
import TopHead from "@/components/TopHead.vue"
import Sdbbutton from "@/components/Sdbbutton.vue"
import FooterCom from "@/components/FooterCom.vue"


import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import GoodsShow from './components/GoodsShow.vue'
import MascotShow from './components/MascotShow.vue'

import GoodsShowShop from './components/GoodsShowShop.vue'
import ShopsBar from './components/ShopsBar.vue'
import PageCount from './components/PageCount.vue'

axios.defaults.baseURL = 'http://localhost:8888'
axios.defaults.withCredentials = true

Vue.prototype.axios = axios

Vue.use(ElementUI);
//定义全局组件
Vue.component("top-head", TopHead)
Vue.component("top-button", Sdbbutton)
Vue.component("footer-com", FooterCom)


Vue.component('goods-show', GoodsShow)

Vue.component('mascot-show',MascotShow)

Vue.component('goods-showshop', GoodsShowShop)
Vue.component('shops-bar', ShopsBar)
Vue.component('page-count', PageCount)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')