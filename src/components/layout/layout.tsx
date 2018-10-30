import Vue, {CreateElement, VNode} from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {oneOf, prefixCls} from "../../utils/assist";

@Component

class Layout extends Vue {
    @Prop({
        type: String,
        validator(prop: string): boolean {
            return oneOf(prop, ['vertical', 'horizontal']);
        }
    })
    public direction!: 'vertical' | 'horizontal';

    public get isVertical(): boolean {
        const { direction, $slots } = this;

        if (direction === 'vertical') {
            return true;
        }
        else if (direction === 'horizontal') {
            return false;
        }

        return ($slots && $slots.default)
            ? $slots.default.some(vnode => {
                const tag = vnode.componentOptions && vnode.componentOptions.tag;
                return tag ===  `${prefixCls}header` || tag === `${prefixCls}footer`;
            })
            : false;
    }


    public get propClass(): object {
        const { isVertical } = this;

        return {
            [`${prefixCls}-layout`]: true,
            [`${prefixCls}-layout-vertical`]: isVertical
        };
    }


    public render(h: CreateElement): VNode {
        const { $slots , propClass} = this;

        return (
            <section class={propClass}>{$slots.default}</section>
        );
    }
}

export default Layout;