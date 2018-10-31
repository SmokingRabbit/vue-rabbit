import Vue, { VNode } from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
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

    @Prop({ type: Boolean, default: false })
    public visible!: boolean;

    private popper: Popper = new Popper().$mount();

    private root: HTMLElement = document.body;

    private onlyPopup: boolean = false;

    private isVisible: boolean = false;

    public static zIndex: number = 1000;

    public static getZIndex(): number {
        return Popup.zIndex++;
    }

    private onClickHandler(): void {
        this.updatePopoupisVisible(!this.isVisible);
    }

    private onMouseEnterHandler(): void {
        this.updatePopoupisVisible(true);
    }

    private onMouseLeaveHandler(): void {
        this.updatePopoupisVisible(false);
    }

    private onFocusHandler(): void {
        this.updatePopoupisVisible(true);
    }

    private onBlurHandler(): void {
        this.updatePopoupisVisible(false);
    }

    private onContextMenuHandler(): void {
        this.updatePopoupisVisible(!this.isVisible);
    }

    private updatePopoupisVisible(isVisible: boolean): void {
        const { popper, $el, onlyPopup } = this;
        let zIndex: number = popper.zIndex;

        if (isVisible) {
            zIndex = Popup.getZIndex();
        }

        let data: { [key: string]: any } = {
            isVisible,
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
        this.isVisible = isVisible;
        this.$emit('visibleChange', isVisible);
    }

    @Watch('visible')
    public watchVisibleChange(cur: boolean): void {
        console.log(cur, this.visible);
        // if (this.isVisible !== cur) {
        //     this.updatePopoupisVisible(cur);
        // }
    }

    public beforeCreate(): void {
        const { $slots } = this;

        if ($slots.default.length > 1) {
            throw new Error('Child element must wrapped in tag');
        }

        this.onlyPopup = !($slots.default && $slots.default.length === 1);
    }

    public mounted(): void {
        const { popper, onlyPopup, root, $slots, $el, action, placement, offsetX, offsetY, space } = this;

        root.appendChild(popper.$el);
        popper.setData({
            popup: $slots.popup[0],
            only: onlyPopup,
            placement,
            offsetX,
            offsetY,
            space
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
        console.log($slots.default[0]);
        // return h($slots.default[0].tag);
        return $slots.default[0];
    }
}

export default Popup;
