import Vue, { CreateElement, VNode} from 'vue';
import { Component, Prop } from 'vue-property-decorator';
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
        default: 'top',
        validator(param) {
            return oneOf(param, ['top', 'left', 'bottom', 'right', 'left-top', 'left-bottom',
                'right-top', 'right-bottom', 'top-left', 'top-right', 'bottom-left', 'bottom-right']);
        }
    })
    public placement!: 'top' | 'left' | 'bottom' | 'right' | 'left-top' | 'left-bottom'
        | 'right-top' | 'right-bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

    private get className(): object {
        const { placement } = this;

        return {
            [`${prefixCls}tooltip`]: true,
            [`${prefixCls}tooltip-placement-${placement}`]: true,
        };
    }

    public render(h: CreateElement): VNode {
        const { className, content, $slots, placement } = this;

        return (
            <popup placement={placement} popperClass={className}>
                { $slots.default }
                <template slot='popup'>
                    <div class={`${prefixCls}tooltip-inner`}>{ content }</div>
                </template>
            </popup>
        );
    }
}

export default Tooltip;
