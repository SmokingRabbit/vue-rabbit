import Vue, { CreateElement, VNode } from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { rect } from '../../utils/doms';

@Component

class Popper extends Vue {

    @Prop({ type: Boolean, default: false })
    public visible!: boolean;

    @Prop(Object)
    public popup!: VNode;

    @Prop({ type: Boolean, default: true })
    public only!: boolean;

    @Prop(Number)
    public zIndex!: number;

    @Prop(Number)
    public triggerTop!: number;

    @Prop(Number)
    public triggerLeft!: number;

    @Prop(Number)
    public triggerWidth!: number;

    @Prop(Number)
    public triggerHeight!: number;

    @Prop(Number)
    public offsetX!: number;

    @Prop(Number)
    public offsetY!: number;

    @Prop(Number)
    public space!: number;

    @Prop(String)
    public placement!: string;

    @Prop([String, Object, Array])
    public popperClass!: string | object | [];

    private top: number = 0;

    private left: number = 0;

    public setData(state: { [key: string]: any}): void {
        Object.keys(state).forEach((property: string) => {
            this[property] = state[property];
        });
    }

    @Watch('visible')
    public onVisibleChange(cur: boolean) {
        if (cur) {
            this.$nextTick(() => {
                console.log('tick');
            });
        }
    }

    public updated() {
        if (this.visible) {
            this.updatePosition();
        }
    }

    private updatePosition(): void {
        const { placement, triggerTop, triggerLeft, triggerWidth, triggerHeight, $el, offsetX, offsetY, space } = this;
        const { width, height } = rect($el);

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

    private get styles(): object {
        const { visible, top, left, zIndex, only } = this;

        if (only) {
            return {};
        }

        return  {
            display: visible ? 'block' : 'none',
            position: 'absolute',
            zIndex,
            top: `${top}px`,
            left: `${left}px`
        };
    }

    public render(h: CreateElement): VNode {
        const { popup, styles, popperClass } = this;

        return (
            <div style={styles} class={popperClass}>{ popup }</div>
        );
    }
}

export default Popper;
