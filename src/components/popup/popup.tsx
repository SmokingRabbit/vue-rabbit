import Vue, { CreateElement, VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { oneOf } from '../../utils/assist';

@Component

class RbtPopup extends Vue {

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

    // private onClickHandler(e: MouseEvent): void {
    //     console.log(e);
    // }
    //
    // private onMouseEnterHandler(e: MouseEvent): void {
    //     console.log(e);
    // }
    //
    // private onMouseLeaveHandler(e: MouseEvent): void {
    //     console.log(e);
    // }
    //
    // private onFocusHandler(e: MouseEvent): void {
    //     console.log(e);
    // }
    //
    // private onBlurHandler(e: MouseEvent): void {
    //     console.log(e);
    // }
    //
    // private onContextMenuHandler(e: MouseEvent): void {
    //     console.log(e);
    // }

    public mounted(): void {

    }

    public render(): VNode | null {
        const { $slots } = this;

        if (!$slots.default) {
            return null;
        }

        if ($slots.default.length > 1) {
            throw new Error('Child element must wrapped in tag');
        }

        return $slots.default[0];
    }
}

export default RbtPopup;
