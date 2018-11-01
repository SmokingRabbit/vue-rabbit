import Vue, {CreateElement, VNode} from 'vue';
import {Component} from 'vue-property-decorator';
import {prefixCls} from '../../utils/assist';

@Component

class Header extends Vue {

    private get className(): object {
        return {
            [`${prefixCls}header`]: true
        };
    }

    public render(h: CreateElement): VNode {
        const { $slots, className } = this;

        return (
            <header class={className}>{$slots.default}</header>
        );
    }
}

export default Header;
