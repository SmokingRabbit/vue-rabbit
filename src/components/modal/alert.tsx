import Vue, { CreateElement, VNode, VueConstructor } from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { prefixCls } from '../../utils/assist';
import Modal from './modal';
import ModalHeader from './model-header';
import ModalBody from './modal-body';
import ModalFooter from './model-footer';
import Button from '../button';

export interface AlertModalProps {
    title?: string;
    message: string;
    onConfirm?: (e: MouseEvent) => void;
    confirmText?: string;
    bordered?: boolean;
    maskCloseable?: boolean;
    scrollable?: boolean;
}

@Component({
    components: {
        Modal,
        ModalHeader,
        ModalBody,
        ModalFooter,
        AbtButton: Button
    }
})

class AlertModal extends Vue {

    @Prop({ type: Boolean, default: false })
    public visible!: boolean;

    @Prop({ type: String, default: '提示' })
    public title!: string;

    @Prop(String)
    public message!: string;

    @Prop(Function)
    public onConfirm!: (e: MouseEvent) => void;

    @Prop({ type: String, default: '确定' })
    public confirmText!: string;

    @Prop({ type: Boolean, default: false })
    public bordered!: boolean;

    @Prop({ type: Boolean, default: true })
    public maskCloseable!: boolean;

    @Prop({ type: Boolean, default: false })
    public scrollable!: boolean;

    public static install(api: VueConstructor) {
        api.prototype.$alert = (props: AlertModalProps) => {
            const instance = new AlertModal({propsData: props});

            instance.$mount();

            instance.visible = true;

            instance.$on('update:visible', (visible: boolean): void => {
                if (!visible) {
                    instance.visible = false;
                    setTimeout(() => {
                        instance.$destroy();
                    }, 500);
                }
            });
        };
    }

    private alertVisible: boolean = false;

    private onVisibleChangeHandler(visible: boolean): void {
        this.$emit('update:visible', visible);
        this.$emit('visible-change', visible);
    }

    public created(): void {
        this.alertVisible = this.visible;
    }

    @Watch('visible')
    public watchVisibleChange(cur: boolean) {
        if (cur !== this.alertVisible) {
            this.alertVisible = cur;
        }
    }

    private onConfirmHandler(e: MouseEvent): void {
        if (this.onConfirm) {
            this.onConfirm(e);
        }

        this.onVisibleChangeHandler(false);
    }

    public render(h: CreateElement): VNode {
        const { title, message, confirmText, alertVisible, maskCloseable, scrollable, bordered } = this;

        return (
            <modal
                width={340}
                maskCloseable={maskCloseable}
                scrollable={scrollable}
                bordered={bordered}
                visible={alertVisible}
                on-visible-change={this.onVisibleChangeHandler}
                modalClass={`${prefixCls}modal-alert`}>
                <modal-header title={title}></modal-header>
                <modal-body>
                    { message }
                </modal-body>
                <modal-footer>
                    <abt-button onClick={this.onConfirmHandler} type='primary'>{ confirmText }</abt-button>
                </modal-footer>
            </modal>
        );
    }
}

export default AlertModal;
