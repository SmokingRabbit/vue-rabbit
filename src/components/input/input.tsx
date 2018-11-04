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

    @Prop({
        type: String,
        default: 'default',
        validator(param: string) {
            return oneOf(param, ['small', 'default', 'large']);
        }
    })
    public size!: 'small' | 'default' | 'large';

    @Prop({ type: Boolean, default: false })
    public clearable!: boolean;

    @Prop({ type: Boolean, default: false })
    public block!: boolean;

    @Prop({ type: Boolean, default: false })
    public textarea!: boolean;

    @Prop({ type: Boolean, default: false })
    public resize!: boolean;

    private onInputHandler(e: MouseEvent): void {
        this.$emit('change', e);
        this.$emit('input', (e.target as HTMLInputElement).value);
    }

    private onKeyDownHandler(e: KeyboardEvent): void {
        this.$emit('keydown', e);

        if (e.keyCode === 13) {
            this.$emit('enter', e);
        }
    }

    private onFocusHandler(e: MouseEvent): void {
        this.$emit('focus', e);

        if (!this.textarea) {
            const ev = document.createEvent('Event');
            ev.initEvent('focus', true, true);
            this.$el.dispatchEvent(ev);
        }
    }

    private onBlurHandler(e: MouseEvent): void {
        this.$emit('blur', e);

        if (!this.textarea) {
            const ev = document.createEvent('Event');
            ev.initEvent('blur', true, true);
            this.$el.dispatchEvent(ev);
        }
    }

    public focus(): void {
        (this.$refs.input as HTMLInputElement).focus();
    }

    public blur(): void {
        (this.$refs.input as HTMLInputElement).blur();
    }

    private onClearHandler(): void {
        this.$emit('input', '');
        this.focus();
    }

    private get className(): object {
        const { size } = this;

        return {
            [`${prefixCls}input`]: true,
            [`${prefixCls}input-size-${size}`]: true
        };
    }

    private get textAreaClassName(): object {
        const { size, resize } = this;

        return {
            [`${prefixCls}textarea`]: true,
            [`${prefixCls}textarea-size-${size}`]: true,
            [`${prefixCls}textarea-can-resize`]: resize
        };
    }

    private get wrapClassName(): object {
        const { size, $slots, block, clearable } = this;

        return {
            [`${prefixCls}input-wrap`]: true,
            [`${prefixCls}input-wrap-block`]: block,
            [`${prefixCls}input-wrap-clearable`]: clearable,
            [`${prefixCls}input-wrap-size-${size}`]: true,
            [`${prefixCls}input-wrap-prepend`]: $slots.prepend !== undefined,
            [`${prefixCls}input-wrap-append`]: $slots.append !== undefined,
            [`${prefixCls}input-wrap-prefix`]: $slots.prefix !== undefined,
            [`${prefixCls}input-wrap-suffix`]: $slots.suffix !== undefined
        };
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
            clearable,
            className,
            wrapClassName,
            textarea,
            textAreaClassName
        } = this;

        if (textarea) {
            return (
                <textarea
                    class={textAreaClassName}
                    onKeyDown={this.onKeyDownHandler}
                    onInput={this.onInputHandler}
                    onFocus={this.onFocusHandler}
                    onBlur={this.onBlurHandler}
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
                    value={value}/>
            );
        }

        return (
            <div class={wrapClassName}>
                {
                    $slots.prepend &&
                    <label class={`${prefixCls}input-prepend`}>
                        { $slots.prepend }
                    </label>
                }
                {
                    $slots.prefix &&
                    <div class={`${prefixCls}input-prefix`} ref='prefix'>
                        { $slots.prefix }
                    </div>
                }
                <input
                    class={className}
                    onKeyDown={this.onKeyDownHandler}
                    onInput={this.onInputHandler}
                    onFocus={this.onFocusHandler}
                    onBlur={this.onBlurHandler}
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
                    <div class={`${prefixCls}input-suffix`} ref='suffix'>
                        { $slots.suffix }
                    </div>
                }
                {
                    $slots.append &&
                    <label class={`${prefixCls}input-append`}>
                        { $slots.append }
                    </label>
                }
                {
                    clearable && value &&
                    <span onClick={this.onClearHandler} class={`${prefixCls}input-clear`}>
                        <icon type='close'/>
                    </span>
                }
            </div>
        );
    }
}

export default Input;
