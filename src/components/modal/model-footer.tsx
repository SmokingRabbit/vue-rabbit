import Vue, { CreateElement, VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { prefixCls, oneOf } from '../../utils/assist';

@Component

class ModalFooter extends Vue {

    @Prop({
        type: String,
        default: 'end',
        validator(param: string) {
            return oneOf(param, ['start', 'end']);
        }
    })
    public justify!: 'end' | 'start';

    private get className(): object {
        const { justify } = this;

        return {
            [`${prefixCls}modal-footer`]: true,
            [`${prefixCls}modal-footer-justify-${justify}`]: true
        };
    }

    public render(h: CreateElement): VNode {
        const { $slots, className } = this;

        return (
            <div class={className}>
                { $slots.default }
            </div>
        );
    }
}

export default ModalFooter;
