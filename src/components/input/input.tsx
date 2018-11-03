import Vue, { CreateElement, VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { oneOf, prefixCls } from '../../utils/assist';
import Icon from '../icon';

@Component({
    components: {
        Icon
    }
})

class Input extends Vue {

    @Prop({
        type: String,
        default: 'text',
        validator(param: string) {
            return oneOf(param, ['text', 'number', 'password']);
        }
     })
    public type!: boolean;

    @Prop()
    public value!: any;

    @Prop(Number)
    public maxlength!: number;

    @Prop(Number)
    public minlength!: number;

    @Prop(String)
    public placeholder!: string;

    @Prop(String)
    public name!: string;

    @Prop({ type: Boolean, default: false })
    public readonly!: boolean;

    @Prop({ type: Boolean, default: false })
    public disabled!: boolean;

    @Prop({ type: Boolean, default: false })
    public autofocus!: boolean;

    @Prop({ type: Boolean, default: false })
    public autocomplete!: boolean;

    @Prop(Number)
    public step!: number;

    @Prop(Number)
    public tabindex!: number;

    @Prop({ type: Boolean, default: false })
    public clearable!: boolean;

    private onChangeHandler(e: MouseEvent): void {
        this.$emit('change', e);

    }

    private onKeyDownHandler(e: MouseEvent): void {
        this.$emit('keydown', e);
    }

    private onClearHandler(): void {
        console.log('clear');
    }

    public render(h: CreateElement): VNode {
        const {
            $slots,
            type,
            value,
            maxlength,
            minlength,
            placeholder,
            name,
            readonly,
            disabled,
            autofocus,
            autocomplete,
            step,
            tabindex,
            clearable
        } = this;

        return (
            <div class={`${prefixCls}input-wrap`}>
                {
                    $slots.prepend &&
                    <label>{ $slots.prepend }</label>
                }
                {
                    $slots.prefix &&
                    <div>{ $slots.prefix }</div>
                }
                <input
                    onKeyDown={this.onKeyDownHandler}
                    onChange={this.onChangeHandler}
                    ref='input'
                    tabindex={tabindex}
                    step={step}
                    autocomplete={autocomplete}
                    autofocus={autofocus}
                    disabled={disabled}
                    readonly={readonly}
                    name={name}
                    placeholder={placeholder}
                    minlength={minlength}
                    maxlength={maxlength}
                    value={value}
                    type={type}/>
                {
                    $slots.suffix &&
                    <div>{ $slots.suffix }</div>
                }
                {
                    $slots.append &&
                    <label>{ $slots.prepend }</label>
                }
                {
                    clearable &&
                    <span onClick={this.onClearHandler}>
                        <icon type='close'/>
                    </span>
                }
            </div>
        );
    }
}

export default Input;
