import {Prop} from 'vue-property-decorator';

class CustomClass {
    @Prop({
        type: String,
        default: ''
    })
    public customClass !: string;

    public get getCustomClass(): object {
        const {customClass} = this;
        let result = {};

        if (!customClass) {
            result = customClass.split(' ').map((each: string) => {
                return {[each]: true};
            });
        }

        return result;
    }
}

export default CustomClass;