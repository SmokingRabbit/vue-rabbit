import Vue, {CreateElement, VNode} from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component

class Col extends Vue {

    @Prop({
        type: String,
        default: 'div'
    })
    public tag !: string;

    @Prop({
        type: String,
        default: ''
    })
    public customClass !: string;

    public render(h: CreateElement): VNode {
        const {tag: Tag} = this;

        return (
            <Tag></Tag>
        );
    }
}

export default Col;