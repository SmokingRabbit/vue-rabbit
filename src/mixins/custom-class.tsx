import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component

class CustomClass extends Vue {
    @Prop({
        type: String,
        default: ''
    })
    public customClass !: string;

    public get getCustomClass(): object {
        const {customClass} = this;
        const result: any = {};

        if (customClass) {
            customClass.split(' ').forEach((each: string) => {
                result[each] = true;
            });
        }

        return result;
    }
}

export default CustomClass;