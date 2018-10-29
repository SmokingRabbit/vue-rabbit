import Vue, { VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { oneOf } from '../../utils/assist';
import Popper from './popper';
import { on, off, offset } from '../../utils/doms';

@Component

class Popup extends Vue {

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
            return oneOf(param, ['top', 'left', 'bottom', 'right', 'left-top', 'left-bottom',
                'right-top', 'right-bottom', 'top-left', 'top-right', 'bottom-left', 'bottom-right']);
        }
    })
    public placement!: 'top' | 'left' | 'bottom' | 'right' | 'left-top' | 'left-bottom'
        | 'right-top' | 'right-bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

    @Prop({ type: Number, default: 0 })
    public offsetX!: number;

    @Prop({ type: Number, default: 0 })
    public offsetY!: number;

    @Prop({ type: Number, default: 2 })
    public space!: number;

    @Prop({ type: Boolean, default: false })
    public disabled!: boolean;

    @Prop({ type: Number, default: 200 })
    public delay!: number;

    @Prop([String, Object, Array])
    public popperClass!: string | object | [];

    private popper: Popper = new Popper().$mount();

    private root: HTMLElement = document.body;

    private onlyPopup: boolean = false;

    private visible: boolean = false;

    public static zIndex: number = 1000;

    public static getZIndex(): number {
        return Popup.zIndex++;
    }

    private onClickHandler(): void {
        this.updatePopoupVisible(!this.visible);
    }

    private onMouseEnterHandler(): void {
        this.updatePopoupVisible(true);
    }

    private onMouseLeaveHandler(): void {
        this.updatePopoupVisible(false);
    }

    private onFocusHandler(): void {
        this.updatePopoupVisible(true);
    }

    private onBlurHandler(): void {
        this.updatePopoupVisible(false);
    }

    private onContextMenuHandler(): void {
        this.updatePopoupVisible(!this.visible);
    }

    private updatePopoupVisible(visible: boolean): void {
        const { popper, $el, onlyPopup } = this;
        let zIndex: number = popper.zIndex;

        if (visible) {
            zIndex = Popup.getZIndex();
        }

        let data: { [key: string]: any } = {
            visible,
            zIndex
        };

        if (!onlyPopup) {
            const { top: triggerTop, left: triggerLeft, width: triggerWidth, height: triggerHeight } = offset($el);

            data = Object.assign(data, {
                triggerTop,
                triggerLeft,
                triggerWidth,
                triggerHeight
            });
        }

        popper.setData(data);
        this.visible = visible;
    }

    public beforeCreate(): void {
        const { $slots } = this;

        if ($slots.default.length > 1) {
            throw new Error('Child element must wrapped in tag');
        }

        this.onlyPopup = !($slots.default && $slots.default.length === 1);
    }

    public mounted(): void {
        const { popper, onlyPopup, root, $slots, $el, action, placement, offsetX, offsetY, space, popperClass } = this;

        root.appendChild(popper.$el);
        popper.setData({
            popup: $slots.popup[0],
            only: onlyPopup,
            placement,
            offsetX,
            offsetY,
            space,
            popperClass
        });

        if (!onlyPopup) {
            switch (action) {
                case 'hover':
                    on($el, 'mouseenter', this.onMouseEnterHandler);
                    on($el, 'mouseleave', this.onMouseLeaveHandler);
                    break;

                case 'click':
                    on($el, 'click', this.onClickHandler);
                    break;

                case 'focus':
                    on($el, 'focus', this.onFocusHandler);
                    on($el, 'blur', this.onBlurHandler);
                    break;

                case 'contextMenu':
                    on($el, 'contentmenu', this.onContextMenuHandler);
                    break;

                default:
                    break;
            }
        }
    }

    public beforeDestroy(): void {
        const { popper, root, action, onlyPopup, $el } = this;

        if (!onlyPopup) {
            switch (action) {
                case 'hover':
                    off($el, 'mouseenter', this.onMouseEnterHandler);
                    off($el, 'mouseleave', this.onMouseLeaveHandler);
                    break;

                case 'click':
                    off($el, 'click', this.onClickHandler);
                    break;

                case 'focus':
                    off($el, 'focus', this.onFocusHandler);
                    off($el, 'blur', this.onBlurHandler);
                    break;

                case 'contextMenu':
                    off($el, 'contentmenu', this.onContextMenuHandler);
                    break;

                default:
                    break;
            }
        }

        root.removeChild(popper.$el);
        popper.$destroy();
    }

    public render(): VNode | null {
        const { $slots, onlyPopup } = this;

        if (onlyPopup) {
            return null;
        }

        return $slots.default[0];
    }
}

export default Popup;
