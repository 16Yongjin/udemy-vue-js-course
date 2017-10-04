import VueRouter from 'vue-router'
import Auth from './components/Auth.vue'
import AuthSuccess from './components/AuthSuccess.vue'
import UserInfo from './components/UserInfo.vue'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/', component : Auth
        },
        {
            path: '/auth', component : Auth
        },
        {
            path : '/success', component : AuthSuccess
        },
        {
            path : '/user_info', component : UserInfo
        }
    ]
});

export default router