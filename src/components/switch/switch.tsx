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
        type: Number,
        default: 22
    })
    public height!: number;

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
        const { currentValue , height , coreColor , activeColor , closeColor } = this;

        return {
            label: {
                height: `${height}px`,
                lineHeight: `${height}px`,
                minWidth: `${ height * 2.4 }px`,
                borderRadius: `${height / 2}px`,
                backgroundColor: currentValue ? activeColor : closeColor ,
            },
            core: {
                width: `${height - 2}px`,
                backgroundColor: coreColor,
            },
            innerOpen: {
                paddingRight: `${height * 1.3}px`,
                paddingLeft: `${height * 0.3}px`,
            },
            innerClose: {
                paddingLeft: `${height * 1.3}px`,
                paddingRight: `${height * 0.3}px`,
            }
        };
    }

    public created(): void {
        console.log(123);
    }

    private handChange(): void {
        this.input();
        this.change();
    }

    public render(h: CreateElement): VNode {
        const { $slots , textPosition , className, stylesList, name, id, activeValue, closeValue , currentValue , switchDisable } = this;

        return (
            <span class={className['wrap']}>
                {
                    textPosition !== 'outer' || !$slots.close || !$slots.open
                        ?
                        null
                        :
                        <span class={className['outerClose']}>
                            {$slots.close}
                        </span>
                }
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
                    </span>
                    {
                        textPosition !== 'inner' || !$slots.close || !$slots.open
                            ?
                            null
                            :
                            <span class={className['innerClose']} style={stylesList['innerClose']}>
                            {$slots.close}
                        </span>
                    }
                    {
                        textPosition !== 'inner' || !$slots.close || !$slots.open
                            ?
                            null
                            :
                            <span class={className['innerOpen']} style={stylesList['innerOpen']}>
                            {$slots.open}
                        </span>
                    }
                </label>
                {
                    textPosition !== 'outer' || !$slots.close || !$slots.open
                        ?
                        null
                        :
                        <span class={className['outerOpen']}>
                            {$slots.open}
                        </span>
                }
            </span>
        );
    }

}

export default RbtSwitch;
