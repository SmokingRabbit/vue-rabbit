import {Component, Emit, Inject, Prop} from 'vue-property-decorator';
import Vue, { CreateElement, VNode } from 'vue';
import {explodeLen, isNumeric, oneOf, prefixCls} from '../../utils/assist';

@Component
class Input extends Vue {
    @Inject('rbtForm')
    public form?: any;

    @Inject('rbtFormItem')
    public formItem?: any;

    @Prop({
        type: String,
        default: 'text'
    })
    public type!: string;

    @Prop([String, Number])
    public value!: string;

    @Prop({
        type: [String, Number],
        default: '40px'
    })
    public size!: string | number;

    @Prop({
        type: String,
        default: 'none',
        validator(val) {
            return oneOf(val , ['none', 'both', 'horizontal', 'vertical']);
        }
    })
    public resize?: 'none'| 'both'| 'horizontal'| 'vertical';

    @Prop(Number)
    public maxlength?: number;

    @Prop(Number)
    public minlength?: number;

    @Prop(String)
    public placeholder?: string;

    @Prop(Boolean)
    public clearable?: boolean;

    @Prop(Boolean)
    public disabled?: boolean;

    @Prop(String)
    public prefixIcon?: string;

    @Prop(String)
    public suffixIcon?: string;

    @Prop(Boolean)
    public fillet?: boolean;

    @Prop({
        type: Number,
        default: 3,
    })
    public rows?: number;

    @Prop({
        type: [Boolean , Object],
        default: false
    })
    public autosize?: boolean|object;

    @Prop({
        type: String,
        default: 'off',
        validator(val): boolean {
            return oneOf(val , ['off', 'on']);
        }
    })
    public autocomplete!: 'off'|'on';

    @Prop(String)
    public name?: string;

    @Prop(Boolean)
    public readonly?: boolean;

    @Prop(Number)
    public max?: number;

    @Prop(Number)
    public min?: number;

    @Prop(Boolean)
    public autofocus?: boolean;

    @Prop(Boolean)
    public textRight?: boolean;

    public hovering: boolean = false;
    public focused: boolean = false;
    public currentValue: string = this.value || '';
    public inputPaddingLeft: string = '';

    private get isDisabled(): boolean {
        const { form , disabled } = this;

        return disabled || form.disabled;
    }

    private get hasPrefix(): boolean {
        const { $slots, prefixIcon } = this;

        return !!($slots.prefix || prefixIcon);
    }

    private get hasSuffix(): boolean {
        const { $slots, suffixIcon, clearable } = this;

        return !!($slots.suffix || suffixIcon || clearable);
    }

    public formItemLabelWidth(): any {
        const {formItem} = this;

        if (formItem.labelPosition !== 'inside') {
            return;
        }
        const value = formItem._labelWidth || formItem.getLabelItemWidth;

        if (!value) {
            this.$nextTick(() => {
                this.formItemLabelWidth();
            });
        }

        const results = explodeLen(value);
        this.inputPaddingLeft = `${results.value + 10}${results.len || 'px'}`;
    }

    private get className(): object {
        const { type, isDisabled, hasSuffix, hasPrefix, textRight } = this;
        return {
            wrapper: {
                [`${prefixCls}input_wrapper`]: true,
                [`${prefixCls}input_wrapper-${ type === 'textarea' ? 'textarea' : 'input' }`]: true,
                [`${prefixCls}input_disabled`]: isDisabled,
                [`${prefixCls}input_suffix`]: hasSuffix,
                [`${prefixCls}input_prefix`]: hasPrefix,
            },
            append: {
                [`${prefixCls}input_append`]: true,
            },
            prepend: {
                [`${prefixCls}input_prepend`]: true,
            },
            input: {
                [`${prefixCls}input_inner`]: true,
                [`${prefixCls}input_inner-right`]: textRight
            }
        };
    }

    public get styleList(): object {
        const {size, fillet, formItemLabelWidth} = this;
        const sz = isNumeric(size) ? `${size}px` : size;

        this.$nextTick(() => {
            formItemLabelWidth();
        });
        return {
            input: {
                height: sz ,
                lineHeight: sz ,
                borderRadius: fillet && sz,
                paddingLeft: this.inputPaddingLeft
            }
        };
    }

    private hasSlotsElement(h: CreateElement, name: string): VNode|void {
        const {$slots, className} = this;

        if (!$slots[name]) {
            return;
        }

        return <div
            class={className[name]}
        >
            {$slots[name]}
        </div>;
    }

    public render(h: CreateElement): VNode {
        const { className, styleList, value, type } = this;
        const { hasSlotsElement, handleInput } = this;

        return <div class={className['wrapper']}>
            {hasSlotsElement(h, 'append')}
            <input style={styleList['input']}
                   type={type}
                   value={value}
                   oninput={handleInput}
                   class={className['input']}/>
        </div>;
    }

    @Emit('input')
    private handleInput(): any {
        return this.value;
    }
}

export default Input;
