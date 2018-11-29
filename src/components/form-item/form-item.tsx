import {Component, Inject, Prop, Provide} from 'vue-property-decorator';
import Vue, {CreateElement, VNode} from 'vue';
import {prefixCls} from '../../utils/assist';

@Component

class FormItem extends Vue {

    @Provide()
    public rbtFormItem = this;

    @Inject({
        from: 'rbtForm',
        default: {}
    })
    public form !: any;

    @Prop({
        type: String
    })
    public label!: string;

    @Prop({
        type: String
    })
    public labelWidth!: string;

    @Prop({
        type: String
    })
    public prop!: string;

    @Prop({
        type: Boolean,
        default: false
    })
    public required!: boolean;

    @Prop({
        type: [Object , Array],
    })
    public rule!: object | object[];

    public get className(): object {
        return {
            [`${prefixCls}form-item`]: true,
        };
    }

    public render(h: CreateElement): VNode {
        const { $slots , className } = this;
        return (
            <div class={className}>{$slots.default}</div>
        );
    }
}

export default FormItem;
