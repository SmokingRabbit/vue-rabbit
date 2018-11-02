import Vue, { CreateElement, VNode} from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { prefixCls, oneOf, stopPropagation } from '../../utils/assist';
import { addClass, removeClass } from '../../utils/doms';
import Popup from '../popup';

@Component({
    components: {
        Popup
    }
})

class Modal extends Vue {

    @Prop({ type: Boolean, default: false })
    public visible!: boolean;

    @Prop({ type: Number, default: 500})
    public width!: number;

    @Prop(String)
    public modalClass!: string;

    @Prop({
        type: String,
        default: 'middle',
        validator(param: string) {
            return oneOf(param, ['top', 'middle', 'bottom']);
        }
    })
    public align!: 'top' | 'middle' | 'bottom';

    @Prop({
        type: String,
        default: 'center',
        validator(param: string) {
            return oneOf(param, ['start', 'end', 'center']);
        }
    })
    public justify!: 'start' | 'end' | 'center';

    @Prop({ type: Boolean, default: false })
    public bordered!: boolean;

    @Prop({ type: Boolean, default: true })
    public maskCloseable!: boolean;

    @Prop({ type: Boolean, default: false })
    public scrollable!: boolean;

    private get containerClassName(): object {
        const { align, justify } = this;

        return {
            [`${prefixCls}modal-container`]: true,
            [`${prefixCls}modal-align-${align}`]: true,
            [`${prefixCls}modal-justify-${justify}`]: true
        };
    }

    private get modalClassName(): object {
        const { modalClass, bordered } = this;

        return {
            [`${prefixCls}modal`]: true,
            [`${prefixCls}modal-bordered`]: bordered,
            [modalClass]: modalClass !== undefined
        };
    }

    private get modalStyles(): object {
        const { width } = this;

        return {
            width: `${width}px`
        };
    }

    private hideModal(): void {
        this.$emit('update:visible', false);
    }

    private onMaskClickHandler(): void {
        const { maskCloseable } = this;

        if (maskCloseable) {
            this.hideModal();
        }
    }

    @Watch('visible')
    public watchVisibleChange(cur: boolean): void {
        const { scrollable } = this;

        if (!scrollable && cur) {
            addClass(document.body, `${prefixCls}modal-open`);
        }
        else {
            removeClass(document.body, `${prefixCls}modal-open`);
        }
    }

    public render(h: CreateElement): VNode {
        const { containerClassName, modalClassName, $slots, visible, modalStyles } = this;

        return (
            <popup visible={visible} transitionName='modal'>
                <div class={`${prefixCls}modal-mask`}></div>
                <div class={containerClassName} onClick={this.onMaskClickHandler}>
                    <div class={modalClassName} style={modalStyles} onClick={stopPropagation}>
                        { $slots.default }
                    </div>
                </div>
            </popup>
        );
    }
}

export default Modal;
