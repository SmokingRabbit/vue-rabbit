import {
    Button,
    Icon,
    Spin
} from './components';

const components: {[key: string]: any} = {
    Button,
    Icon,
    Spin
};

function install(Vue: any): void {
    Object.keys(components).forEach((name: string) => {
        Vue.component(`rbt-${name.toLowerCase()}`, components[name]);
    });
}

export default {
    version: '1.0.0',
    install,
    ...components
};
