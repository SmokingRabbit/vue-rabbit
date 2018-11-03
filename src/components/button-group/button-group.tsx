import Vue, { CreateElement, VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { oneOf, prefixCls } from '../../utils/assist';

@Component

class ButtonGroup extends Vue {

    @Prop({ type: Boolean, default: false })
    public shape!: boolean;

    @Prop({ type: Boolean, default: false })
    public block!: boolean;

    @Prop({
        type: String,
        default: 'horizontal',
        validator(param: string) {
            return oneOf(param, ['vertical', 'horizontal']);
        }
    })
    public type!: 'vertical' | 'horizontal';

    private get className(): object {
        const { type, shape, block } = this;

        return {
            [`${prefixCls}btn-group`]: true,
            [`${prefixCls}btn-group-${type}`]: true,
            [`${prefixCls}btn-group-shape`]: shape,
            [`${prefixCls}btn-group-block`]: block,
        };
    }

    public render(h: CreateElement): VNode {
        const { $slots, className } = this;

        return (
            <div class={className}>
                { $slots.default }
            </div>
        );
    }
}

export default ButtonGroup;
