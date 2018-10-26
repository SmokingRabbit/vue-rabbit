import Vue, { CreateElement, VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { oneOf } from '../../utils/assist';

@Component

class RbtPopup extends Vue {

    @Prop(Object)
    public trigger!: VNode | HTMLElement;

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
        default: 'bottom-left',
        validator(param) {
            return oneOf(param, ['none', 'top', 'left', 'bottom', 'right', 'left-top', 'left-bottom',
                'right-top', 'right-bottom', 'top-left', 'top-right', 'bottom-left', 'bottom-right']);
        }
    })
    public placement!: 'none' | 'top' | 'left' | 'bottom' | 'right' | 'left-top' | 'left-bottom'
        | 'right-top' | 'right-bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

    @Prop({ type: Boolean, default: false })
    public visible!: boolean;

    @Prop({ type: Number, default: 2 })
    public offsetX!: number;

    @Prop({ type: Number, default: 2 })
    public offsetY!: number;

    @Prop({ type: Boolean, default: false })
    public disabled!: boolean;

    // @Watch('visible')
    // private onVisibleChange(val: boolean, oldVal: boolean) {
    //
    // }

    public render(h: CreateElement): VNode | void {
        return <div></div>;
    }
}

export default RbtPopup;
