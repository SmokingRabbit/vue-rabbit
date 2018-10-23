import RbtButton from './components/button';

function install(Vue: any, options: object = {}): void {
    Vue.component(RbtButton.name, RbtButton);

    if (options) {
        console.log(options);
    }
}

export default {
    version: '1.0.0',
    install
};
