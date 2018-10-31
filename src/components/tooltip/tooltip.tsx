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
        default: 'click',
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
            <popup placement={placement} action={action} visible={visible} onVisibleChange={this.onVisibleChange}>
                { $slots.default }
                <transition name='fade' slot='popup'>
                    <div class={className}>
                        <div class={`${prefixCls}tooltip-inner`}>{visible.toString()} { content }</div>
                    </div>
                </transition>
            </popup>
        );
    }
}

export default Tooltip;
