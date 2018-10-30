import Vue, {CreateElement, VNode} from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {prefixCls} from '../../utils/assist';

@Component

class Footer extends Vue {

    @Prop({
        type: String,
        default: '60px'
    })
    public height!: string;

    private get className(): object {
        return {
            [`${prefixCls}footer`]: true
        };
    }

    private get styleName(): object {
        const {height} = this;

        return {
            height,
        };
    }

    public render(h: CreateElement): VNode {
        const {$slots, className, styleName} = this;
        return (
            <footer style={styleName} class={className}>{$slots.default}</footer>
        );
    }
}

export default Footer;
