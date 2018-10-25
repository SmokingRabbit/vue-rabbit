import Vue, { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

export interface RbtPopupProps {
    trigger?: VNode | HTMLElement;
    action?: 'click' | 'hover' | 'focus' | 'contextMenu';
    placement?: 'none' | 'top' | 'left' | 'bottom' | 'right' | 'left-top' | 'left-bottom'
        | 'right-top' | 'right-bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    visible?: boolean;
    offsetX?: number;
    offsetY?: number;
    disabled?: boolean;
}

@Component({
    props: {

    }
})

class RbtPopup extends Vue {

    protected trigger!: VNode | HTMLElement;
    protected action!: string;
    protected placement!: string;
    protected visible!: boolean;
    protected offsetX!: number;
    protected offsetY!: number;
    protected disabled!: boolean;

    // @Watch('visible')
    // private onVisibleChange(val: boolean, oldVal: boolean) {
    //
    // }

    public render(h: CreateElement): VNode | void {
        return <div></div>;
    }
}

export default RbtPopup;
