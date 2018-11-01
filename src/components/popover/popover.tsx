import Vue, { CreateElement, VNode} from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { prefixCls, oneOf } from '../../utils/assist';
import Popup from '../popup';

@Component({
    components: {
        Popup
    }
})

class Popover extends Vue {

    @Prop(String)
    public title!: string;

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
        this.$emit('visibleChange', cur);
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
            [`${prefixCls}popover`]: true,
            [`${prefixCls}popover-placement-${placement}`]: true,
        };
    }

    public render(h: CreateElement): VNode {
        const { className, title, content, $slots, placement, trigger, visible, disabled } = this;

        return (
            <div class={`${prefixCls}popover-trigger`}>
                { $slots.default }
                <popup
                    ref='popup'
                    visible={visible}
                    onVisibleChange={this.onVisibleChange}
                    class={className}
                    transitionName={`appear-${placement}`}
                    placement={placement}
                    disabled={disabled}
                    trigger={trigger}>
                    <div class={`${prefixCls}popover-inner`}>
                        {
                            title !== undefined &&
                            <div class={`${prefixCls}popover-title`}>
                                { title }
                            </div>
                        }
                        <div class={`${prefixCls}popover-content`}>
                            { $slots.content || content }
                        </div>
                    </div>
                </popup>
            </div>
        );
    }
}

export default Popover;
