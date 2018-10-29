import Vue, { CreateElement, VNode} from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { prefixCls } from '../../utils/assist';
import Popup from '../popup';

@Component({
    components: {
        Popup
    }
})

class Tooltip extends Vue {

    @Prop({ type: String, required: true })
    public content!: string;

    private get className(): object {
        return {
            [`${prefixCls}tooltip`]: true
        };
    }

    public render(h: CreateElement): VNode {
        const { className, content, $slots } = this;

        return (
            <popup>
                { $slots.default }
                <template slot='popup'>
                        <div class={className}>{ content }</div>
                </template>
            </popup>
        );
    }
}

export default Tooltip;
