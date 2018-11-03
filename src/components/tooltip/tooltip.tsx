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

    @Prop(String)
    public content!: string;

    @Prop({
        type: String,
        default: 'hover',
        validator(param) {
            return oneOf(param, ['click', 'hover', 'focus', 'contextMenu']);
        }
    })
    public trigger!: 'click' | 'hover' | 'focus' | 'contextMenu';

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

    @Prop({ type: Boolean, default: false })
    public disabled!: boolean;

    public visible: boolean = false;

    @Watch('visible')
    public watchVisibleChange(cur: boolean): void {
        this.$emit('visible-change', cur);
    }

    private onVisibleChange(v: boolean): void {
        this.visible = v;
    }

    public mounted(): void {
        (this.$refs.popup as Popup).setTriggerEl(this.$el);
    }

    private get className(): object {
        const { placement } = this;

        return {
            [`${prefixCls}tooltip`]: true,
            [`${prefixCls}tooltip-placement-${placement}`]: true,
        };
    }

    public render(h: CreateElement): VNode {
        const { className, content, $slots, placement, trigger, visible, disabled } = this;

        return (
            <div class={`${prefixCls}tooltip-trigger`}>
                { $slots.default }
                <popup
                    ref='popup'
                    visible={visible}
                    on-visible-change={this.onVisibleChange}
                    class={className}
                    transitionName={`appear-${placement}`}
                    placement={placement}
                    disabled={disabled}
                    trigger={trigger}>
                    <div class={`${prefixCls}tooltip-inner`}>
                        { $slots.content || content }
                    </div>
                </popup>
            </div>
        );
    }
}

export default Tooltip;
