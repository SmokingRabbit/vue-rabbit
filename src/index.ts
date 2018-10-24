import RbtButton from './components/button';

function install(Vue: any): void {
    Vue.component(RbtButton.name, RbtButton);
}

export default {
    version: '1.0.0',
    install,
    RbtButton
};
