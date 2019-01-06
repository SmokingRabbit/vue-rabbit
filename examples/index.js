import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import App from './app';
import '@/styles/index.less';
import Rabbit from '@/';

Vue.use(VueRouter);
Vue.use(Rabbit);

Vue.config.debug = true;

const router = new VueRouter({
    esModule: false,
    mode: 'history',
    routes
});

const app = new Vue({
    router,
    template: '<App/>',
    components: { App }
});

app.$mount('#root');
