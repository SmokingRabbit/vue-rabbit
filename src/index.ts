import { VueConstructor } from 'vue';
import * as components from './components';

function install(Vue: VueConstructor): void {
    Object.keys(components).forEach((name: string) => {
        Vue.component(`Rbt${name}`, components[name]);
    });

    Vue.use(components.AlertModal);
}

export default {
    version: '1.0.0',
    install,
    ...components
};
