import { Component, Emit, Prop } from 'vue-property-decorator';
import Vue, { CreateElement, VNode } from 'vue';

@Component

class Radio extends Vue {

    @Prop({
        type: [Boolean, String, Number]
    })
    public value!: boolean | string | number;

    @Prop({
        type: [Boolean , String , Number]
    })
    public label!: boolean | string | number;

    @Prop({
        type: Boolean,
        default: false
    })
    public disabled!: boolean;

    @Emit()
    public input(): any {
        return;
    }

    public render(h: CreateElement): VNode {
        return (
            <div></div>
        );
    }
}

export default Radio;
