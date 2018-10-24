import Vue, { CreateElement, VNode } from 'vue';
import Component from 'vue-class-component';

export interface RbtButtonProps {
    type?: '' | 'prmary' | 'default' | 'info' | 'waring' | 'danger';
}

@Component({
    props: {
        type: String
    }
})

class RbtButton extends Vue {

    private get className(): string {
        return 'rbt-buton';
    }

    public render(h: CreateElement): VNode {
        const { $slots, className } = this;

        return (<button class={className}>{$slots.default}</button>);
    }
}

export default RbtButton;
