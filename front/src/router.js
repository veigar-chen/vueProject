import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Mascot from './views/Mascot.vue'
import UserLogin from './components/UserLogin.vue'
import UserReg from "@/components/UserReg.vue";
import Home from './views/Home.vue'
import UserInfo from "@/components/UserInfo.vue";
import BossLogin from "@/components/BossLogin.vue";
import Boss from './views/Boss.vue'
import Manrage from './views/Manrage.vue'



Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
		    path: '/',
		    component: Home
		},
        {
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
        },
        {
            path: '/sprout',
            component: Mascot
        },
        {
            path: '/boss',
            component: Boss,
            children: [{
                path: '',
                component: BossLogin
            }]
        }, {
            path: '/manrage',
            component: Manrage,
        }
    ]
})