import {Component, Prop, Provide} from 'vue-property-decorator';
import Vue, {CreateElement, VNode} from 'vue';
import {oneOf, prefixCls} from '../../utils/assist';

@Component

class Form extends Vue {

    @Provide()
    public form = this;

    @Prop({
        type: String,
        default: 'top',
        validator(val): boolean {
            return oneOf(val, ['top', 'left', 'right']);
        }
    })
    public labelPosition !: 'top' | 'left' | 'right';

    @Prop({
        type: String,
    })
    public labelWidth !: string;

    @Prop({
        type: Object,
    })
    public model !: object;

    @Prop({
        type: Object,
    })
    public rules !: object;

    @Prop({
        type: Boolean
    })
    public inline !: boolean;

    @Prop({
        type: Boolean,
        default: false,
    })
    public disabled !: boolean;

    @Prop({
        type: Boolean ,
        default: false,
    })
    public statusIcon !: boolean;

    public fields = [];

    public constructor() {
        super();
        console.log('constructor');
    }

    public created(): void {
        console.log('created');
    }

    public mounted(): void {
        console.log('mounted');
    }

    public get className(): object {
        const {inline, labelPosition} = this;
        return {
            [`${prefixCls}form`]: true,
            [`${prefixCls}form-inline`] : inline,
            [`${prefixCls}form-label-${labelPosition}`] : !!labelPosition,
        };
    }

    public render(h: CreateElement): VNode {
        const {$slots, className} = this;
        return (
            <form class={className}>
                {$slots.default}
            </form>
        );
    }

}

export default Form;
