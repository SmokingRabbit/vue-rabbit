import Vue, { CreateElement, VNode} from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { prefixCls, oneOf } from '../../utils/assist';
import Popup from '../popup';

@Component({
    components: {
        Popup
    }
})

class Tooltip extends Vue {

    @Prop({ type: String, required: true })
    public content!: string;

    @Prop({
        type: String,
        default: 'hover',
        validator(param) {
            return oneOf(param, ['click', 'hover', 'focus', 'contextMenu']);
        }
    })
    public action!: 'click' | 'hover' | 'focus' | 'contextMenu';

    @Prop({
        type: String,
        default: 'top',
        validator(param) {
            return oneOf(param, ['top', 'left', 'bottom', 'right', 'left-top', 'left-bottom',
                'right-top', 'right-bottom', 'top-left', 'top-right', 'bottom-left', 'bottom-right']);
        }
    })
    public placement!: 'top' | 'left' | 'bottom' | 'right' | 'left-top' | 'left-bottom'
        | 'right-top' | 'right-bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

    public visible: boolean = false;

    @Watch('visible')
    public watchVisibleChange(cur: boolean): void {
        this.$emit('visibleChange', cur);
    }

    private onVisibleChange(v: boolean): void {
        this.visible = v;
    }

    public mounted(): void {
        (this.$refs.popup as Popup).setTrigger(this.$el);
    }

    private get className(): object {
        const { placement } = this;

        return {
            [`${prefixCls}tooltip`]: true,
            [`${prefixCls}tooltip-placement-${placement}`]: true,
        };
    }

    public render(h: CreateElement): VNode {
        const { className, content, $slots, placement, action, visible } = this;

        return (
            <div class={`${prefixCls}tooltip-trigger`}>
                { $slots.default }
                <popup
                    ref='popup'
                    visible={visible}
                    onVisibleChange={this.onVisibleChange}
                    class={className}
                    transitionName={`from-${placement}`}
                    placement={placement}
                    action={action}>
                    <div class={`${prefixCls}tooltip-inner`}>
                        { content }
                    </div>
                </popup>
            </div>
        );
    }
}

export default Tooltip;
