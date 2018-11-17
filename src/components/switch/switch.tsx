import Vue, {CreateElement, VNode} from 'vue';
import {Component, Emit, Inject, Prop, Watch} from 'vue-property-decorator';
import {oneOf, prefixCls} from '../../utils/assist';

@Component

class RbtSwitch extends Vue {
    @Inject({
        from: 'rbtForm',
        default: ''
    })
    public rbtForm!: any;

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
    })
    public coreColor!: string;

    @Prop({
        type: String,
    })
    public closeColor!: string;

    @Prop({
        type: String,
    })
    public activeColor!: string;

    @Prop({
        type: Boolean,
        default: false
    })
    public disabled!: boolean;

    @Prop({
        type: [Boolean, String, Number],
        default: false
    })
    public value!: boolean | string | number;

    @Prop({
        type: String,
        default: '22px',
    })
    public height!: string;

    @Prop({
        type: String,
        default: 'outer',
        validator(prop: string): boolean {
            return oneOf(prop, ['inner', 'outer']);
        }
    })
    public textPosition!: 'inner' | 'outer';

    @Prop({
        type: Boolean,
        default: false
    })
    public loading!: boolean;
    public heightNumber!: number;
    public heightUnit!: string;

    @Emit()
    public input(): any {
        const { currentValue , activeValue , closeValue } = this;
        return !currentValue ? activeValue : closeValue;
    }

    @Emit()
    public change(): any {
        const { currentValue , activeValue , closeValue } = this;
        return !currentValue ? activeValue : closeValue;
    }

    public currentValue: boolean = (this.value === this.activeValue);

    @Watch('value')
    public onValueChange(val: any ): void {
        this.currentValue = (val === this.activeValue);
    }

    private get switchDisable(): boolean {
        const { disabled , rbtForm , loading } = this;
        return (rbtForm ? rbtForm.disabled : disabled || loading);
    }

    private get className(): object {
        const { currentValue, switchDisable , loading } = this;
        return {
            wrap: {
                [`${prefixCls}switch`]: true,
            },
            label: {
                [`${prefixCls}switch-label`]: true,
                [`${prefixCls}switch-checked`]: currentValue,
                [`${prefixCls}switch-disabled`]: switchDisable,
                [`${prefixCls}switch-loading`]: loading,
            },
            core: {
                [`${prefixCls}switch-core`]: true,
            },
            coreBefore: {
                [`${prefixCls}switch-core-before`]: true,
            },
            input: {
                [`${prefixCls}switch-input`]: true,
            },
            outerClose: {
                [`${prefixCls}switch-outer-text`]: true,
                [`${prefixCls}switch-outer-text-close`]: true,
                [`${prefixCls}switch-outer-text-active`]: !currentValue,
            },
            outerOpen: {
                [`${prefixCls}switch-outer-text`]: true,
                [`${prefixCls}switch-outer-text-open`]: true,
                [`${prefixCls}switch-outer-text-active`]: currentValue,
            },
            innerClose: {
                [`${prefixCls}switch-inner-text`]: true,
                [`${prefixCls}switch-inner-text-close`]: true,
                [`${prefixCls}switch-inner-text-active`]: !currentValue,
            },
            innerOpen: {
                [`${prefixCls}switch-inner-text`]: true,
                [`${prefixCls}switch-inner-text-open`]: true,
                [`${prefixCls}switch-inner-text-active`]: currentValue,
            }
        };
    }

    private get stylesList(): object {
        const { currentValue , heightNumber , heightUnit , coreColor , activeColor , closeColor } = this;

        return {
            label: {
                height: `${heightNumber}${heightUnit}`,
                lineHeight: `${heightNumber}${heightUnit}`,
                minWidth: `${ heightNumber * 2.4 }${heightUnit}`,
                borderRadius: `${heightNumber / 2}${heightUnit}`,
                backgroundColor: currentValue ? activeColor : closeColor ,
            },
            core: {
                width: `${heightNumber - 2}${heightUnit}`,
                backgroundColor: coreColor,
            },
            coreBefore: {
                borderRadius: `${heightNumber / 2}${heightUnit}`,
            },
            innerOpen: {
                paddingRight: `${heightNumber * 1.3}${heightUnit}`,
                paddingLeft: `${heightNumber * 0.3}${heightUnit}`,
            },
            innerClose: {
                paddingLeft: `${heightNumber * 1.3}${heightUnit}`,
                paddingRight: `${heightNumber * 0.3}${heightUnit}`,
            }
        };
    }

    private get hasTextSlots(): boolean {
        const { $slots } = this;
        return !!($slots.close && $slots.open);
    }

    public constructor() {
        super();
        let results;
        results =  /([0-9.]*)([a-z%]*)/g.exec(this.height);
        this.heightNumber = parseFloat(results[1] || '22');
        this.heightUnit = results[2] === '' ? 'px' : results[2];
    }

    private handChange(): void {
        this.input();
        this.change();
    }

    private outerCloseText(h: CreateElement): VNode {
        const { $slots , className } = this;

        return (
            <span class={className['outerClose']}>{$slots.close}</span>
        );
    }

    private outerOpenText(h: CreateElement): VNode {
        const { $slots , className } = this;

        return (
            <span class={className['outerOpen']}>{$slots.open}</span>
        );
    }

    private innerCloseText(h: CreateElement): VNode {
        const {$slots, className, stylesList} = this;

        return (
            <span class={className['innerClose']} style={stylesList['innerClose']}>{$slots.close}</span>
        );
    }

    private innerOpenText(h: CreateElement): VNode {
        const {$slots, className, stylesList} = this;

        return (
            <span class={className['innerOpen']} style={stylesList['innerOpen']}>{$slots.open}</span>
        );
    }

    public render(h: CreateElement): VNode {
        const { textPosition , className, stylesList, name, id, activeValue, closeValue , currentValue , switchDisable , hasTextSlots } = this;
        const { outerOpenText , outerCloseText , innerCloseText , innerOpenText } = this;

        return (
            <span class={className['wrap']}>
                { (textPosition === 'outer' && hasTextSlots) && outerCloseText(h) }
                <label
                    class={className['label']}
                    style={stylesList['label']}
                >
                    <input id={id}
                           name={name}
                           ref='input'
                           type='checkbox'
                           class={className['input']}
                           trueValue={activeValue}
                           closeValue={closeValue}
                           disabled={switchDisable}
                           value={currentValue}
                           onChange={this.handChange}
                    />
                    <span
                        style={stylesList['core']}
                        class={className['core']}
                    >
                        <span
                            class={className['coreBefore']}
                            style={stylesList['coreBefore']}
                        >
                        </span>
                    </span>
                    { (textPosition === 'inner' && hasTextSlots) && innerCloseText(h) }
                    { (textPosition === 'inner' && hasTextSlots) && innerOpenText(h) }
                </label>
                { (textPosition === 'outer' && hasTextSlots) && outerOpenText(h) }
            </span>
        );
    }

}

export default RbtSwitch;
