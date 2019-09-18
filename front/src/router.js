import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import UserLogin from './components/UserLogin.vue'
import UserReg from "@/components/UserReg.vue";
import UserInfo from "@/components/UserInfo.vue";


Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/login',
        component: Login,
        children: [{
            path: '',
            component: UserLogin
        }, {
            path: '/reg',
            component: UserReg
        }, {
            path: '/info',
            component: UserInfo
        }]
    }]
})