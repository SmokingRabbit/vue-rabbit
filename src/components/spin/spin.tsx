import Vue, { CreateElement, VNode } from 'vue';
import Component from 'vue-class-component';
import { oneOf, prefixCls } from '../../utils/assist';
import RbtIcon from '../icon';

export interface RbtSpinProps {
    type?: 'default' | 'primary';
}

@Component({
    props: {
        type: {
            type: String,
            default: 'default',
            validator(param) {
                return oneOf(param, ['default', 'primary']);
            }
        }
    },
    components: {
        RbtIcon
    }
})

class RbtSpin extends Vue {

    protected type!: string;

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
                <rbt-icon type='spin'/>
            </span>
        );
    }
}

export default RbtSpin;
