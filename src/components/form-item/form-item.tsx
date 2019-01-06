import {Component, Inject, Prop, Provide, Mixins} from 'vue-property-decorator';
import {CreateElement, VNode} from 'vue';
import {cloneOf, objAssign, oneOf, prefixCls, propOfPath} from '../../utils/assist';
import AsyncValidator from 'async-validator';
import Emitter from '../../mixins/emitter';

@Component
class FormItem extends Mixins(Emitter) {

    @Provide()
    public rbtFormItem = this;

    @Inject({
        from: 'rbtForm',
        default: {}
    })
    public form?: any;

    @Prop(String)
    public label?: string;

    @Prop(String)
    public labelWidth?: string;

    @Prop({
        type: String,
        validator(val: any): boolean {
            return oneOf(val, ['outside', 'inside', 'top']);
        }
    })
    public labelPosition?: 'outside' | 'inside' | 'top';

    @Prop({
        type: String,
        validator(val: any): boolean {
            return oneOf(val, ['left', 'right', 'center']);
        }
    })
    public labelAlign?: 'left' | 'right' | 'center';

    @Prop({
        type: String,
        default: ''
    })
    public prop!: string;

    @Prop({
        type: [Boolean],
        default: undefined
    })
    public required?: boolean | undefined;

    @Prop([Object, Array])
    public rules?: object | object[];

    public validateState: string = '';
    public validateMessage: string = '';
    public validateDisabled: boolean = false;

    public initialValue: any;

    public get fieldValue(): any {
        const model = this.form.model;

        if (!model || !this.prop) {
            return;
        }
        const cache = propOfPath(model, this.prop, true);
        return cache.value;
    }

    public validate(trigger: string, callback: any = null): any {
        this.validateDisabled = false;
        const rules = this.getFilteredRule(trigger);
        if ((!rules || rules.length === 0) && this.required === undefined) {
            callback();
            return true;
        }

        const descriptor = {};
        if (rules && rules.length > 0) {
            descriptor[this.prop] = rules.map(rule => {
                delete rule.trigger;
                return rule;
            });
        }

        this.validateState = 'validating';

        const validator = new AsyncValidator(descriptor);
        const model = {};

        model[this.prop] = this.fieldValue;
        validator.validate(model, {firstFields: true}, (errors, invalidFields) => {
            this.validateState = !errors ? 'success' : 'error';
            this.validateMessage = errors ? errors[0].message : '';

            callback(this.validateMessage, invalidFields);
            this.form && this.form.callValidate('validate', this.prop, !errors, this.validateMessage || null);
        });
    }

    public clearValidate() {
        this.validateState = '';
        this.validateMessage = '';
        this.validateDisabled = false;
    }

    public resetField(): void {
        this.validateState = '';
        this.validateMessage = '';

        const prop = propOfPath(this.form.model, this.prop, true);

        this.validateDisabled = true;
        prop.object[prop.key] = cloneOf(this.initialValue);

        this.broadcast('TimeSelect', 'resetField', this.initialValue);
    }

    private getFilteredRule(trigger: string): any {
        const rules = this.getRules();

        return rules.filter(rule => {
            if (!rule.trigger || trigger === '') {
                return true;
            }
            if (Array.isArray(rule.trigger)) {
                return rule.trigger.indexOf(trigger) > -1;
            } else {
                return rule.trigger === trigger;
            }
        }).map(rule => objAssign(rule));
    }

    private getRules(): any[] {
        const selfRules = this.rules;
        const formRules = this.form.rules && this.form.rules[this.prop];
        const requiredRule = (this.required !== undefined) ? {required: this.required} : [];

        const result: any[] = [];
        return result.concat(selfRules || formRules || []).concat(requiredRule);
    }

    public mounted(): void {
        if (this.prop) {
            this.form.fieldAdd && this.form.fieldAdd(this);

            this.initialValue = cloneOf(this.fieldValue);

            const rules = this.getRules();
            if (rules.length || this.required !== undefined) {
                this.$on('on.form.blur', this.onFieldBlur);
                this.$on('on.form.change', this.onFieldChange);
            }
        }
    }

    public onFieldBlur(): void {
        this.validate('blur');
    }

    public onFieldChange(): void {
        if (this.validateDisabled) {
            this.validateDisabled = false;
            return;
        }

        this.validate('change');
    }

    public beforeDestroy() {
        if (this.prop) {
            this.form.fieldRemove && this.form.fieldRemove(this);
        }
    }

    private get _labelPosition(): string {
        const r = this.labelPosition || this.form.labelPosition;
        return r || 'top';
    }

    private get _labelAlign(): string {
        const r = this.labelAlign || this.form.labelAlign;
        return r || 'left';
    }

    public get _labelWidth(): any {
        const {_labelPosition, labelWidth} = this;

        if (_labelPosition === 'top') {
            return false;
        }

        return labelWidth;
    }

    public get getLabelItemWidth(): any {
        const {$refs} = this;
        const el: any = $refs['labelItem'];

        return el && el.offsetWidth;
    }

    public get className(): object {
        const {_labelPosition, _labelAlign} = this;
        return {
            wrapper: {
                [`${prefixCls}form-item_wrapper`]: true,
            },
            label: {
                [`${prefixCls}form-item_label`]: true,
                [`${prefixCls}form-item_position-${_labelPosition}`]: true,
                [`${prefixCls}align-${_labelAlign}`]: true,
            },
            content: {
                [`${prefixCls}form-item_content`]: true
            }
        };
    }

    public get styleList(): object {
        const { _labelWidth, _labelPosition } = this;

        return {
            label: {
                [`${_labelPosition === 'inside' ? 'width' : 'flexBasis'}`]: (_labelWidth === undefined) ? 'auto' : _labelWidth,
            }
        };
    }

    public labelHtml(h: CreateElement): VNode|null {
        const {$slots, className, label, styleList} = this;

        if (!$slots.label && !label) {
            return null;
        }

        return (
            <label ref='labelItem' style={styleList['label']} class={className['label']}>
                {$slots.label || label}
            </label>
        );
    }

    public render(h: CreateElement): VNode {
        const {$slots, className, labelHtml} = this;
        return (
            <div class={className['wrapper']}>
                {labelHtml(h)}
                <div class={className['content']}>
                    {$slots.default}
                </div>
            </div>
        );
    }

}

export default FormItem;
