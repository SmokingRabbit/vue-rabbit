import { Component } from 'vue-property-decorator';
import Vue, { CreateElement, VNode } from 'vue';

@Component

class Form extends Vue {

    public render( h: CreateElement ): VNode {
        return (
            <div></div>
        );
    }

}

export default Form;
