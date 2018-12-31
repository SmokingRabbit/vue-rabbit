import Vue, {CreateElement, VNode} from 'vue';
import {Component, Prop, Provide} from 'vue-property-decorator';
import {oneOf, prefixCls} from '../../utils/assist';

@Component

class Row extends Vue {

    @Provide()
    public rbtRow = this;

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
        default: 'wrap',
        validator(prop: string): boolean {
            return oneOf(prop, ['wrap', 'no', 'reverse']);
        }
    })
    public wrap!: 'wrap' | 'no' | 'reverse';

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
        default: 'row',
        validator(prop: string): boolean {
            return oneOf(prop, ['row', 'row-reverse', 'column', 'column-reverse']);
        }
    })
    public direction!: 'row' | 'row-reverse' | 'column' | 'column-reverse';

    @Prop({
        type: String,
        default: 'top',
        validator(prop: string): boolean {
            return oneOf(prop, ['top', 'middle', 'bottom', 'baseline', 'stretch']);
        }
    })
    public align!: 'top' | 'middle' | 'bottom' | 'stretch' | 'baseline';

    private get className(): object {
        const {align, justify, wrap , direction} = this;

        return {
            [`${prefixCls}row`]: true,
            [`${prefixCls}row-wrap-${wrap}`]: true,
            [`${prefixCls}row-align-${align}`]: true,
            [`${prefixCls}row-justify-${justify}`]: true,
            [`${prefixCls}row-direction-${direction}`]: true,
        };
    }

    private get gutterValue(): object {
        const {gutter} = this;
        let result = {};

        if (gutter) {
            const val = `-${gutter / 2}px`;
            result = {
                marginLeft: val,
                marginRight: val
            };
        }

        return result;
    }

    public render(h: CreateElement): VNode {
        const {tag: Tag, gutterValue, className, $slots} = this;

        return (
            <Tag class={className} style={gutterValue}>
                {$slots.default}
            </Tag>
        );
    }
}

export default Row;
