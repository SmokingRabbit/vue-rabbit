import Vue, { CreateElement, VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { oneOf, prefixCls } from '../../utils/assist';
import Icon from '../icon';

@Component({
    components: {
        Icon
    }
})

class Spin extends Vue {

    @Prop({
        type: String,
        default: 'primary',
        validator(param) {
            return oneOf(param, ['default', 'primary']);
        }
    })
    public type!: string;

    @Prop({ type: Boolean, default: false })
    public visible!: boolean;

    @Prop(String)
    public text!: string;

    private get className(): object {
        return {
            [`${prefixCls}spin`]: true,
            [`${prefixCls}spin-${this.type}`]: true,
        };
    }

    private get wrapClassName(): object {
        const { visible } = this;

        return {
            [`${prefixCls}spin-wrap-filter`]: visible
        };
    }

    public render(h: CreateElement): VNode {
        const { className, $slots, visible, wrapClassName, text } = this;

        const spinComponent = (
            <span class={className}>
                <icon type='spin'/>
            </span>
        );

        if (!$slots.default) {
            return spinComponent;
        }

        return (
            <div class={`${prefixCls}spin-wrap`}>
                <div class={wrapClassName}>
                    { $slots.default }
                </div>
                <transition name='fade'>
                    <div class={`${prefixCls}spin-container`} v-show={visible}>
                        { spinComponent }
                        { text && <p class={`${prefixCls}spin-text`}>{ text }</p> }
                    </div>
                </transition>
            </div>
        );
    }
}

export default Spin;
