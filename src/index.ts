import RbtButton from './components/button';
import RbtIcon from './components/icon';
import RbtSpin from './components/spin';

function install(Vue: any): void {
    Vue.component(RbtButton.name, RbtButton);
    Vue.component(RbtIcon.name, RbtIcon);
    Vue.component(RbtSpin.name, RbtSpin);
}

export default {
    version: '1.0.0',
    install,
    RbtButton,
    RbtIcon,
    RbtSpin
};
