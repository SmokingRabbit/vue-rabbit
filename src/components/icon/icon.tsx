import Vue, { CreateElement, VNode } from 'vue';
import Component from 'vue-class-component';
import { prefixCls } from '../../utils/assist';

export interface RbtIconProps {
    type: string;
}

@Component({
    props: {
        type: {
            type: String,
            required: true
        }

    }
})

class RbtIcon extends Vue {

    protected type!: string;

    private get className(): object {
        return {
            [`${prefixCls}icon`]: true,
            [`${prefixCls}icon-${this.type}`]: true,
        };
    }

    public render(h: CreateElement): VNode {
        const { className } = this;

        return (<i class={className}/>);
    }
}

export default RbtIcon;
