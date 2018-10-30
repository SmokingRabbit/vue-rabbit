import Vue, {CreateElement, VNode} from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {prefixCls} from '../../utils/assist';

@Component

class Header extends Vue {

    @Prop({
        type: String,
        default: '60px'
    })
    public height!: string;

    private get className (): object {
        return {
            [`${prefixCls}header`] : true
        }
    }

    private get styleName (): object {
        const { height } = this;

        return {
            height,
        }
    }

    public render(h: CreateElement): VNode {
        const { $slots , className , styleName } = this;
        return (
            <header style={styleName} class={className}>{$slots.default}</header>
        )
    }
}

export default Header;
