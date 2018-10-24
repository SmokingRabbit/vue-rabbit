import Vue, { CreateElement, VNode } from 'vue';
import Component from 'vue-class-component';
import { oneOf, prefixCls } from '../../utils/assist';
import RbtSpin from '../spin';

export interface RbtButtonProps {
    type?: 'default' | 'prmary' | 'success' | 'info' | 'waring' | 'danger';
    loading?: boolean;
    disabled?: boolean;
    shape?: boolean;
    ghost?: boolean;
    dashed?: boolean;
    block?: boolean;
    text?: boolean;
    customClass?: string;
    size?: 'default' | 'small' | 'large';
    to?: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
}

@Component({
    props: {
        type: {
            type: String,
            default: 'default',
            validator(param: string): boolean {
                return oneOf(param, ['default', 'primary', 'info', 'success', 'warning', 'danger']);
            }
        },
        loading: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        shape: {
            type: Boolean,
            default: false
        },
        ghost: {
            type: Boolean,
            default: false
        },
        dashed: {
            type: Boolean,
            default: false
        },
        block: {
            type: Boolean,
            default: false
        },
        text: {
            type: Boolean,
            default: false
        },
        customClass: String,
        size: {
            type: String,
            default: 'default',
            validator(param: string): boolean {
                return oneOf(param, ['default', 'small', 'large']);
            }
        },
        to: String,
        target: {
            type: String,
            default: '_self',
            validator(param: string): boolean {
                return oneOf(param, ['_blank', '_self', '_parent', '_top']);
            }
        }
    },
    components: {
        RbtSpin
    }
})

class RbtButton extends Vue {

    protected type!: string;
    protected loading!: boolean;
    protected disabled!: boolean;
    protected shape!: boolean;
    protected ghost!: boolean;
    protected dashed!: boolean;
    protected block!: boolean;
    protected text!: boolean;
    protected customClass!: string;
    protected size!: string;
    protected to!: string;
    protected target!: string;

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

    public render(h: CreateElement): VNode {
        const { $slots, className, to, target, loading, type } = this;

        const slot: VNode = (
            <span>
                {loading && <rbt-spin type={type === 'default' ? 'primary' : 'default'}/>}
                {$slots.default}
            </span>
        );

        if (to !== undefined) {
            return (<a class={className} href={to} target={target}>{slot}</a>);
        }

        return (<button class={className}>{slot}</button>);
    }
}

export default RbtButton;
