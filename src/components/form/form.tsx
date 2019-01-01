import {Component, Prop, Provide, Watch} from 'vue-property-decorator';
import Vue, {CreateElement, VNode} from 'vue';
import {devWarn, oneOf, prefixCls} from '../../utils/assist';

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

    public fieldAdd(field: any): void {
        field && this.fields.push(field);
    }

    public fieldRemove(field: any): void {
        field && this.fields.splice(this.fields.indexOf(field), 1);
    }

    public validate(callback: (valid: boolean) => void | undefined ): void {
        const { model } = this;
        if (!model) {
            devWarn('[Form]model is required for validate to work!');
            return;
        }

        let promise;
        if (typeof callback !== 'function' && Promise) {
            promise = new Promise((resolve, reject) => {
                callback = (valid) => {
                    valid ? resolve(valid) : reject(valid);
                };
            });
        }

        if (this.fields.length === 0 && callback) {
            callback(true);
        }

        if (promise) {
            return promise;
        }
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

    @Watch('fields')
    public onFieldsChange(v) {
        console.log('v :', v);
    }
}

export default Form;
