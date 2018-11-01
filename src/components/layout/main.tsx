import Vue, {CreateElement, VNode} from 'vue';
import {Component} from 'vue-property-decorator';
import {prefixCls} from '../../utils/assist';

@Component

class Main extends Vue {

    private get className(): object {
        return {
            [`${prefixCls}main`]: true
        };
    }

    public render(h: CreateElement): VNode {
        const { $slots, className } = this;

        return (
            <main class={className}>{$slots.default}</main>
        );
    }
}

export default Main;
