import Vue, { VNode } from 'vue';
import { Component, } from 'vue-property-decorator';

@Component

class Wrap extends Vue {

    public render(): VNode[] {
        return this.$slots.default;
    }
}

export default Wrap;
