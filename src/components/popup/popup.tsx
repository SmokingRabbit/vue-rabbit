import Vue, { CreateElement, VNode } from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { oneOf } from '../../utils/assist';
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
    public trigger!: 'click' | 'hover' | 'focus' | 'contextMenu';

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

    @Prop({ type: Number, default: 100 })
    public delay!: number;

    @Prop({ type: Boolean, default: false })
    public visible!: boolean;

    @Prop({ type: String, default: 'div' })
    public tag!: string;

    @Prop({ type: String, default: 'fade' })
    public transitionName!: string;

    private top: number = 0;

    private left: number = 0;

    private visibleTimer: null | number = null;

    private debounceTimer: null | number = null;

    private $triggerEl: HTMLElement | null = null;

    public static zIndex: number = 1000;

    public static getZIndex(): number {
        return Popup.zIndex++;
    }

    private onClickHandler(): void {
        this.updateVisible(!this.visible);
    }

    private onMouseEnterHandler(): void {
        this.updateVisible(true);
    }

    private onMouseLeaveHandler(): void {
        this.updateVisible(false);
    }

    private onFocusHandler(): void {
        this.updateVisible(true);
    }

    private onBlurHandler(): void {
        this.updateVisible(false);
    }

    private onContextMenuHandler(): void {
        this.updateVisible(!this.visible);
    }

    private onPopupMouseEnterHandler(): void {
        this.clearTimer();
    }

    private onPopupMouseLeaveHandler(): void {
        this.updateVisible(false);
    }

    private clearTimer(): void {
        if (this.visibleTimer !== null) {
            clearTimeout(this.visibleTimer);
            this.visibleTimer = null;
        }
    }

    private updateVisible(visible: boolean): void {
        const { delay, trigger, $el, disabled } = this;

        if (disabled) {
            return;
        }

        this.clearTimer();

        this.visibleTimer = setTimeout(() => {
            if (visible) {
                on(document.body, 'mousedown', this.globalMouseListenerHandler);

                if (trigger === 'hover') {
                    on($el, 'mouseenter', this.onPopupMouseEnterHandler);
                    on($el, 'mouseleave', this.onPopupMouseLeaveHandler);
                }
            }
            else {
                off(document.body, 'mousedown', this.globalMouseListenerHandler);

                if (trigger === 'hover') {
                    off($el, 'mouseenter', this.onPopupMouseEnterHandler);
                    off($el, 'mouseleave', this.onPopupMouseLeaveHandler);
                }
            }
            this.$emit('visibleChange', visible);
        }, delay);
    }

    private globalMouseListenerHandler(e: MouseEvent): void {
        if (!(this.$triggerEl as HTMLElement).contains(e.target as HTMLElement)) {
            this.updateVisible(false);
        }
    }

    @Watch('visible')
    public watchIsVisibleChange(cur: boolean): void {
        if (cur) {
            on(window, 'resize', this.onResizeHandler);

            if (this.$triggerEl !== null) {
                this.$nextTick(() => {
                    this.updatePosition();
                });
            }
        }
        else {
            off(window, 'resize', this.onResizeHandler);
        }
    }

    public setTriggerEl($el: HTMLElement): void {
        this.$triggerEl = $el.firstElementChild as HTMLElement;

        const { $triggerEl, trigger } = this;

        switch (trigger) {
            case 'hover':
                on($triggerEl, 'mouseenter', this.onMouseEnterHandler);
                on($triggerEl, 'mouseleave', this.onMouseLeaveHandler);
                break;

            case 'click':
                on($triggerEl, 'click', this.onClickHandler);
                break;

            case 'focus':
                on($triggerEl, 'focus', this.onFocusHandler);
                on($triggerEl, 'blur', this.onBlurHandler);
                break;

            case 'contextMenu':
                on($triggerEl, 'contextmenu', this.onContextMenuHandler);
                break;

            default:
                break;
        }
    }

    private onResizeHandler(): void {
        if (this.$triggerEl === null) {
            return;
        }

        if (this.debounceTimer !== null) {
            clearTimeout(this.debounceTimer);
        }

        this.debounceTimer = setTimeout(() => {
            this.updatePosition();
        }, 100);
    }

    private updatePosition(): void {
        const { placement, $el, $triggerEl, offsetX, offsetY, space } = this;
        const { top: triggerTop, left: triggerLeft, width: triggerWidth, height: triggerHeight } = offset($triggerEl as HTMLElement);
        const { offsetWidth: width, offsetHeight: height } = $el;

        let left = 0;
        let top = 0;

        switch (placement) {
            case 'top':
                left = triggerLeft + offsetX - (width - triggerWidth) / 2;
                top = triggerTop + offsetY - height - space;
                break;

            case 'top-left':
                left = triggerLeft + offsetX;
                top = triggerTop + offsetY - height - space;
                break;

            case 'top-right':
                left = triggerLeft + offsetX - (width - triggerWidth);
                top = triggerTop + offsetY - height - space;
                break;

            case 'bottom':
                left = triggerLeft + offsetX - (width - triggerWidth) / 2;
                top = triggerTop + offsetY + triggerHeight + space;
                break;

            case 'bottom-left':
                left = triggerLeft + offsetX;
                top = triggerTop + offsetY + triggerHeight + space;
                break;

            case 'bottom-right':
                left = triggerLeft + offsetX - (width - triggerWidth);
                top = triggerTop + offsetY + triggerHeight + space;
                break;

            case 'left':
                left = triggerLeft + offsetX - width - space;
                top = triggerTop + offsetY - (height - triggerHeight) / 2;
                break;

            case 'left-top':
                left = triggerLeft + offsetX - width - space;
                top = triggerTop + offsetY;
                break;

            case 'left-bottom':
                left = triggerLeft + offsetX - width - space;
                top = triggerTop + offsetY - (height - triggerHeight);
                break;

            case 'right':
                left = triggerLeft + offsetX + triggerWidth + space;
                top = triggerTop + offsetY - (height - triggerHeight) / 2;
                break;

            case 'right-top':
                left = triggerLeft + offsetX + triggerWidth + space;
                top = triggerTop + offsetY;
                break;

            case 'right-bottom':
                left = triggerLeft + offsetX + triggerWidth + space;
                top = triggerTop + offsetY - (height - triggerHeight);
                break;

            default:
                break;
        }

        this.top = top;
        this.left = left;
    }

    public mounted(): void {
        document.body.appendChild(this.$el);
    }

    public beforeDestroy(): void {
        const { $triggerEl, trigger } = this;

        if ($triggerEl !== null) {
            switch (trigger) {
                case 'hover':
                    off($triggerEl, 'mouseenter', this.onMouseEnterHandler);
                    off($triggerEl, 'mouseleave', this.onMouseLeaveHandler);
                    break;

                case 'click':
                    off($triggerEl, 'click', this.onClickHandler);
                    break;

                case 'focus':
                    off($triggerEl, 'focus', this.onFocusHandler);
                    off($triggerEl, 'blur', this.onBlurHandler);
                    break;

                case 'contextMenu':
                    off($triggerEl, 'contextmenu', this.onContextMenuHandler);
                    break;

                default:
                    break;
            }
        }

        document.body.removeChild(this.$el);
    }

    private get styles(): object {
        const { top, left, $triggerEl } = this;
        const zIndex = Popup.getZIndex();
        let styles = { zIndex };

        if ($triggerEl !== null) {
            styles = Object.assign(styles, {
               position: 'absolute',
               zIndex,
               top: `${top}px`,
               left: `${left}px`
           });
        }

        return styles;
    }

    public render(h: CreateElement): VNode {
        const { $slots, styles, visible, tag: Tag, transitionName } = this;

        return (
            <transition name={transitionName}>
                <Tag style={styles} v-show={visible}>
                    { $slots.default }
                </Tag>
            </transition>
        );
    }
}

export default Popup;
