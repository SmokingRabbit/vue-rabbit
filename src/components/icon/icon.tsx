import Vue, { CreateElement, VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { prefixCls } from '../../utils/assist';

@Component

class Icon extends Vue {

    @Prop(String)
    public type!: string;

    @Prop([Number, String])
    public size!: number | string;

    @Prop(String)
    public color!: string;

    private get className(): object {
        const { type } = this;

        return {
            [`${prefixCls}icon`]: true,
            [`${prefixCls}icon-${type}`]: type !== undefined,
        };
    }

    private get styles(): object {
        const { size, color } = this;
        const ret = {};

        if (color !== undefined) {
            ret['color'] = color;
        }

        if (size !== undefined ) {
            ret['font-size'] = `${size}px`;
        }

        return ret;
    }

    public render(h: CreateElement): VNode {
        const { className, styles } = this;

        return (<i class={className} style={styles}/>);
    }
}

export default Icon;
