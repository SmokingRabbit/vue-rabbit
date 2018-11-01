import Vue, {CreateElement, VNode} from 'vue';
import {Component} from 'vue-property-decorator';
import {prefixCls} from '../../utils/assist';

@Component

class Aside extends Vue {

    private get className(): object {
        return {
            [`${prefixCls}aside`]: true
        };
    }

    public render(h: CreateElement): VNode {
        const { $slots, className } = this;

        return (
            <aside class={className}>{$slots.default}</aside>
        );
    }
}

export default Aside;
