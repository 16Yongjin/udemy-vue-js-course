import Home  from './components/Home.vue';
import Header  from './components/Header.vue';

const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'));
    }, 'user')
}
const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'));
    }, 'user')
}
const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'));
    }, 'user')
}
const UserStart = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/UserStart.vue'));
    }, 'user')
}

export const routes = [
    { path: '', component: Home, name: 'home', components: {
        default: Home,
        'header-top': Header
    } },
    { path: '/user', components: {
        default: User,
        'header-bottom': Header
    }, children: [
        { path: '', component: UserStart },
        { path: ':id', component: UserDetail, props: true, beforeEnter: (to, from, next) => {
            console.log('insize route setup');
            next();
        } },
        { path: ':id/edit', component: UserEdit, props: true, name: 'editName' },
    ] },
    { path: '/redirect-me', redirect: { name: 'home' } },
    { path: '*', redirect: { name: 'home' } }
];