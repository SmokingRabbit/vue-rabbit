import Vue, { CreateElement, VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { oneOf, prefixCls } from '../../utils/assist';
import Spin from '../spin';

@Component({
    components: {
        Spin
    }
})

class Button extends Vue {

    @Prop({
        type: String,
        default: 'default',
        validator(param: string): boolean {
            return oneOf(param, ['default', 'primary', 'info', 'success', 'warning', 'danger']);
        }
    })
    public type!: 'default' | 'prmary' | 'success' | 'info' | 'warning' | 'danger';

    @Prop({ type: Boolean, default: false })
    public loading!: boolean;

    @Prop({ type: Boolean, default: false })
    public disabled!: boolean;

    @Prop({ type: Boolean, default: false })
    public shape!: boolean;

    @Prop({ type: Boolean, default: false })
    public ghost!: boolean;

    @Prop({ type: Boolean, default: false })
    public dashed!: boolean;

    @Prop({ type: Boolean, default: false })
    public block!: boolean;

    @Prop({ type: Boolean, default: false })
    public text!: boolean;

    @Prop({ type: String, default: 'default' })
    public size!: 'default' | 'small' | 'large';

    @Prop({
        type: String,
        default: 'button',
        validator(param: string) {
            return oneOf(param, ['button', 'submit', 'reset']);
        }
    })
    public htmlType!: 'button' | 'submit' | 'reset';

    @Prop(String)
    public to!: string;

    @Prop({
        default: '_self',
        validator(param: string): boolean {
            return oneOf(param, ['_blank', '_self', '_parent', '_top']);
        }
    })
    public target!: '_blank' | '_self' | '_parent' | '_top';

    private get className(): object {
        const { type, loading, disabled, shape, ghost, dashed, block, text, size } = this;

        return {
            [`${prefixCls}btn`]: true,
            [`${prefixCls}btn-${type}`]: true,
            [`${prefixCls}btn-loading`]: loading,
            [`${prefixCls}btn-disabled`]: disabled,
            [`${prefixCls}btn-shape`]: shape,
            [`${prefixCls}btn-ghost`]: ghost || dashed,
            [`${prefixCls}btn-dashed`]: dashed,
            [`${prefixCls}btn-block`]: block,
            [`${prefixCls}btn-text`]: text,
            [`${prefixCls}btn-size-${size}`]: true
        };
    }

    private onClickHandler(e: MouseEvent): void {
        const { disabled, loading } = this;

        if (!disabled && !loading) {
            this.$emit('click', e);
        }
    }

    public render(h: CreateElement): VNode {
        const { $slots, className, to, target, loading, type, disabled, htmlType } = this;

        const slot: VNode = (
            <span>
                { loading && <spin type={type === 'default' ? 'primary' : 'default'}/> }
                { $slots.default }
            </span>
        );

        if (to !== undefined) {
            return (
                <a class={className} disabled={disabled} href={to} target={target} onClick={this.onClickHandler}>
                    { slot }
                </a>
            );
        }

        return (
            <button class={className} htmlType={htmlType} disabled={disabled} onClick={this.onClickHandler}>
                { slot }
            </button>
        );
    }
}

export default Button;
