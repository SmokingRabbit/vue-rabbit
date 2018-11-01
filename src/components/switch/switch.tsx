import Vue, {CreateElement, VNode} from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {oneOf, prefixCls} from '../../utils/assist';

@Component

class RbtSwitch extends Vue {

    @Prop({
        type: String,
        default: ''
    })
    public name!: string;

    @Prop({
        type: String
    })
    public id!: string;

    @Prop({
        type: [Boolean, String, Number],
        default: false
    })
    public closeValue!: boolean | string | number;

    @Prop({
        type: [Boolean, String, Number],
        default: true
    })
    public activeValue!: boolean | string | number;

    @Prop({
        type: String,
        default: ''
    })
    public closeColor!: string;

    @Prop({
        type: String,
        default: ''
    })
    public activeColor!: string;

    @Prop({
        type: String,
    })
    public closeText!: string;

    @Prop({
        type: String
    })
    public activeText!: string;

    @Prop({
        type: Boolean,
        default: false
    })
    public disabled!: boolean;

    @Prop({
        type: Boolean,
        default: false
    })
    public value!: boolean;

    @Prop({
        type: String,
        default: '40px'
    })
    public width!: string;

    @Prop({
        type: Boolean,
        default: false,
    })
    public checked!: boolean;

    @Prop({
        type: String,
        default: 'default',
        validator(prop: string): boolean {
            return oneOf(prop, ['default', 'small', 'large']);
        }
    })
    public size!: 'default' | 'small' | 'large';

    @Prop({
        type: String,
        default: 'outer',
        validator(prop: string): boolean {
            return oneOf(prop, ['inner', 'outer']);
        }
    })
    public textPosition!: 'inside' | 'outside';

    private get className(): object {
        const {checked, size} = this;
        return {
            wrap: {
                [`${prefixCls}switch`]: true,
                [`${prefixCls}switch-checked`]: checked,
            },
            core: {
                [`${prefixCls}switch-${size}`]: !!size,
            },
            input: {
                [`${prefixCls}switch-input`]: true,
            }
        };
    }

    public get inputAttribute(): object {
        const {name, id, activeValue, closeValue} = this;

        return {
            name,
            id,
            ref: 'input',
            type: 'checkbox',
            ['true-value']: activeValue,
            ['false-value']: closeValue,
        };
    }

    public render(h: CreateElement): VNode {
        const {className, inputAttribute} = this;

        return (
            <span class={className} >
                <input {...inputAttribute}/>
            </span>
        );
    }
}

export default RbtSwitch;
