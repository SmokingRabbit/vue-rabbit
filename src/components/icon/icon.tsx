import Vue, { CreateElement, VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { prefixCls } from '../../utils/assist';

@Component

class Icon extends Vue {

    @Prop({ type: String, required: true })
    public type!: string;

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

export default Icon;
