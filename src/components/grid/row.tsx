import Vue, { CreateElement, VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { oneOf, prefixCls } from '../../utils/assist';

@Component

class Row extends Vue {

    @Prop({
        type: String,
        default: ''
    })
    public type!: '' | 'flex';

    @Prop({
        type: String,
        default: 'div'
    })
    public tag!: string;

    @Prop({
        type: Number,
        default: 0
    })
    public gutter!: number;

    @Prop({
        type: String,
        default: 'start',
        validator(prop: string): boolean {
            return oneOf(prop, ['start', 'end', 'center', 'around', 'between']);
        }
    })
    public justify!: 'start' | 'end' | 'center' | 'around' | 'between';

    @Prop({
        type: String,
        default: 'top',
        validator(prop: string): boolean {
            return oneOf(prop, ['top', 'middle', 'bottom']);
        }
    })
    public align!: 'top' | 'middle' | 'bottom';

    @Prop({ type: String, default: '' })
    public customClass !: string;

    private get className(): object {
        const {align, justify, type, customClass} = this;

        return {
            [`${prefixCls}row`]: true,
            [`${prefixCls}row-flex`]: type === 'flex',
            [`${prefixCls}row-flex-align-${align}`]: align !== 'top',
            [`${prefixCls}row-flex-justify-${justify}`]: justify !== 'start',
            [customClass]: customClass !== undefined
        };
    }

    private get gutterValue(): object {
        const { gutter } = this;
        let result = {};

        if (gutter) {
            result = {
                marginLeft: `-${gutter / 2}px`,
                marginRight: `-${gutter / 2}px`
            };
        }

        return result;
    }

    public render(h: CreateElement): VNode {
        const { tag: Tag, gutterValue, className, $slots } = this;

        return (
            <Tag class={className} style={gutterValue}>
                {$slots.default}
            </Tag>
        );
    }
}

export default Row;
