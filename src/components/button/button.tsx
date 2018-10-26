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
    public type!: 'default' | 'prmary' | 'success' | 'info' | 'waring' | 'danger';

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

    @Prop({
        type: String,
        default: 'default',
        validator(param: string): boolean {
            return oneOf(param, ['default', 'small', 'large']);
        }
    })
    public customClass!: string;

    @Prop({ type: String, default: 'default' })
    public size!: 'default' | 'small' | 'large';

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
        return {
            [`${prefixCls}btn`]: true,
            [`${prefixCls}btn-${this.type}`]: true,
            [`${prefixCls}btn-loading`]: this.loading,
            [`${prefixCls}btn-disabled`]: this.disabled,
            [`${prefixCls}btn-shape`]: this.shape,
            [`${prefixCls}btn-ghost`]: this.ghost,
            [`${prefixCls}btn-dashed`]: this.dashed,
            [`${prefixCls}btn-block`]: this.block,
            [`${prefixCls}btn-text`]: this.text,
            [`${prefixCls}btn-size-${this.size}`]: true,
            [this.customClass]: this.customClass !== undefined
        };
    }

    private onClickHandler(e: MouseEvent): void {
        const { disabled, loading } = this;

        if (!disabled && !loading) {
            this.$emit('click', e);
        }
    }

    public render(h: CreateElement): VNode {
        const { $slots, className, to, target, loading, type } = this;

        const slot: VNode = (
            <span>
                {loading && <spin type={type === 'default' ? 'primary' : 'default'}/>}
                {$slots.default}
            </span>
        );

        if (to !== undefined) {
            return (
                <a class={className} href={to} target={target} onClick={this.onClickHandler}>
                    {slot}
                </a>
            );
        }

        return (
            <button class={className} onClick={this.onClickHandler}>
                {slot}
            </button>
        );
    }
}

export default Button;
