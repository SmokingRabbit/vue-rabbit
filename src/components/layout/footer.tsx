import Vue, {CreateElement, VNode} from 'vue';
import {Component} from 'vue-property-decorator';
import {prefixCls} from '../../utils/assist';

@Component

class Footer extends Vue {

    private get className(): object {
        return {
            [`${prefixCls}footer`]: true
        };
    }

    public render(h: CreateElement): VNode {
        const {$slots, className} = this;
        return (
            <footer class={className}>{$slots.default}</footer>
        );
    }
}

export default Footer;
