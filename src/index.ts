import {
    Button,
    Icon,
    Spin,
    Row,
    Col,
    Popup,
    Tooltip,
    Layout,
    Header,
    Footer,
    Main,
    Aside,
    Switch
} from './components';

const components: {[key: string]: any} = {
    Button,
    Icon,
    Spin,
    Row,
    Col,
    Popup,
    Tooltip,
    Layout,
    Header,
    Footer,
    Main,
    Aside,
    Switch
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
