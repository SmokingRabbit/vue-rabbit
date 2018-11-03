import Vue, { CreateElement, VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { prefixCls } from '../../utils/assist';
import Icon from '../icon/';
import Modal from './modal';

@Component({
    components: {
        Icon
    }
})

class ModalHeader extends Vue {

    @Prop({ type: Boolean, default: true })
    public closeable!: boolean;

    @Prop(String)
    public title!: string;

    private onCloseHandler(): void {
        if (this.$parent.$options.name === 'Popup' && this.$parent.$parent.$options.name === 'Modal') {
            (this.$parent.$parent as Modal).hideModal();
        }
    }

    public render(h: CreateElement): VNode {
        const { closeable, title, $slots } = this;

        return (
            <div class={`${prefixCls}modal-header`}>
                <div class={`${prefixCls}modal-header-title`}>{ $slots.default || title }</div>
                {
                    closeable &&
                    <span class={`${prefixCls}modal-header-close`} onClick={this.onCloseHandler}>
                        <icon type='close'/>
                    </span>
                }
            </div>
        );
    }
}

export default ModalHeader;
