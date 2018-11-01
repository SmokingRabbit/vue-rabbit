import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app';
import '@/styles/index.less';
import VueRabbit from '@/';

Vue.use(VueRouter);
Vue.use(VueRabbit);

Vue.config.debug = true;

const router = new VueRouter({
    esModule: false,
    mode: 'history',
    routes: [
        {
            path: '/button',
            component: (resolve) => require(['./routers/button'], resolve)
        },
        {
            path: '/gird',
            component: (resolve) => require(['./routers/gird'], resolve)
        },
        {
            path: '/layout',
            component: (resolve) => require(['./routers/layout'], resolve)
        },
        {
            path: '/tooltip',
            component: (resolve) => require(['./routers/tooltip'], resolve)
        },
        {
            path: '/switch',
            component: (resolve) => require(['./routers/switch'], resolve)
        }
    ]
});

const app = new Vue({
    router,
    template: '<App/>',
    components: { App }
});

app.$mount('#root');
