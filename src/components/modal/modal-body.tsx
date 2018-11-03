import Vue, { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';
import { prefixCls } from '../../utils/assist';

@Component

class ModalBody extends Vue {

    public render(h: CreateElement): VNode {
        const { $slots } = this;

        return (
            <div class={`${prefixCls}modal-body`}>
                { $slots.default }
            </div>
        );
    }
}

export default ModalBody;
