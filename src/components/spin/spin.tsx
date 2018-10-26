import Vue, { CreateElement, VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { oneOf, prefixCls } from '../../utils/assist';
import Icon from '../icon';

@Component({
    components: {
        Icon
    }
})

class Spin extends Vue {

    @Prop({
        type: String,
        default: 'default',
        validator(param) {
            return oneOf(param, ['default', 'primary']);
        }
    })
    public type!: string;

    private get className(): object {
        return {
            [`${prefixCls}spin`]: true,
            [`${prefixCls}spin-${this.type}`]: true,
        };
    }

    public render(h: CreateElement): VNode {
        const { className } = this;

        return (
            <span class={className}>
                <icon type='spin'/>
            </span>
        );
    }
}

export default Spin;
