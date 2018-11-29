import {Component, Prop, Provide} from 'vue-property-decorator';
import Vue, {CreateElement, VNode} from 'vue';
import {oneOf, prefixCls} from '../../utils/assist';

@Component

class Form extends Vue {

    @Provide()
    public rbtForm = this;

    @Prop({
        type: String,
        default: 'top',
        validator(val): boolean {
            return oneOf(val, ['top', 'left', 'right']);
        }
    })
    public labelPosition!: 'top' | 'left' | 'right';

    @Prop({
        type: String,
    })
    public labelWidth!: string;

    @Prop({
        type: Object,
    })
    public model!: object;

    @Prop({
        type: Object,
    })
    public rules!: object;

    @Prop({
        type: Boolean
    })
    public inline!: boolean;

    @Prop({
        type: Boolean,
        default: false,
    })
    public disabled!: boolean;

    @Prop({
        type: Boolean ,
        default: false,
    })
    public statusIcon!: boolean;

    @Prop({
        type: Boolean,
        default: true,
    })
    public showMessage!: boolean;

    @Prop({
        type: Boolean,
        default: false
    })
    public inlineMessage!: boolean;

    @Prop({
        type: Boolean,
        default: true
    })
    public ruleChangeValidate!: boolean;

    @Prop({
        type: Boolean,
        default: false
    })
    public hideRequiredAsterisk!: boolean;

    @Prop({
        type: String,
        default: 'off',
        validator(val): boolean {
            return oneOf(val , ['off' , 'on']);
        }
    })
    public autocomplete!: string;

    public fields: any[] = [];

    public created(): void {
        this.$on('form.field.add', (field: any): void => {
            const {fields}  = this;
            field && fields.push(field);
        });

        this.$on('form.field.remove' , (field: any): void => {
            const { fields } = this;
            field.prop && fields.splice(fields.indexOf(field) , 1);
        });
    }

    public validate(callback: (arg: boolean) => void ): void {
        const { model } = this;
        if (!model) {
            return;
        }
        callback(true);
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
