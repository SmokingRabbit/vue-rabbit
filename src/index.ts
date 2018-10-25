import Button from './components/button';
import Icon from './components/icon';
import Spin from './components/spin';
import Popup from './components/popup';

const components: {[key: string]: any} = {
    Button,
    Icon,
    Spin,
    Popup
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
