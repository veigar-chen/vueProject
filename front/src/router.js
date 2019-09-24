import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import UserLogin from './components/UserLogin.vue'
import UserReg from "@/components/UserReg.vue";
import Home from './views/Home.vue'


import UserInfo from "@/components/UserInfo.vue";
import BossLogin from "@/components/BossLogin.vue";
import GoodsShow from "@/components/GoodsShow.vue";
import Boss from './views/Boss.vue'
import Manrage from './views/Manrage.vue'
import GoodsAdd from "@/components/GoodsAdd.vue";
import GoodsEdit from "@/components/GoodsEdit.vue";
import GoodsParticulars from "@/components/GoodsParticulars.vue";
import Mascot from "@/components/Mascot.vue";
import Shop from "@/components/Shop.vue";




Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            component: Home,
            children: [{
                    path: 'product',
                    component: GoodsParticulars
                },
                {
                    path: '/shop',
                    component: Shop,

                }
            ]
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
            path: '/boss',
            component: Boss,
            children: [{
                path: '',
                component: BossLogin
            }]
        },
        {
            path: '/info',
            component: UserInfo
        }, {
            path: '/manrage',
            component: Manrage,
            children: [{
                path: '',
                component: GoodsShow
            }, {
                path: 'add',
                component: GoodsAdd
            }, {
                path: 'edit',
                component: GoodsEdit
            }]
        }
    ]
})