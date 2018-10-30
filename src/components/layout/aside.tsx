import Vue, {CreateElement, VNode} from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {prefixCls} from '../../utils/assist';

@Component

class Aside extends Vue {

    @Prop({
        type: String,
        default: '250px'
    })
    public width!: string;

    private get className (): object {
        return {
            [`${prefixCls}aside`] : true
        }
    }

    private get styleName (): object {
        const { width } = this;

        return {
            width,
        }
    }

    public render(h: CreateElement): VNode {
        const { $slots , className , styleName } = this;
        return (
            <aside style={styleName} class={className}>{$slots.default}</aside>
        )
    }
}

export default Aside;
