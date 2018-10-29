import Vue, { CreateElement, VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { prefixCls } from '../../utils/assist';

@Component

class Col extends Vue {
    @Prop({
        type: String,
        default: 'div'
    })
    public tag!: string;

    @Prop({
        type: Number,
        default: 24,
        validator(prop: number): boolean {
            return (prop >= 0 && prop <= 24);
        }
    })
    public span!: number;

    @Prop({
        type: Number,
        validator(prop: number): boolean {
            return (prop >= 0 && prop <= 24);
        }
    })
    public offset!: number;

    @Prop({
        type: Number,
        validator(prop: number): boolean {
            return (prop >= 0 && prop <= 24);
        }
    })
    public push !: number;

    @Prop({
        type: Number,
        validator(prop: number): boolean {
            return (prop >= 0 && prop <= 24);
        }
    })
    public pull!: number;

    @Prop({
        type: [Number, Object],
    })
    public xl!: number | object;

    @Prop({
        type: [Number, Object],
    })
    public lg!: number | object;

    @Prop({
        type: [Number, Object],
    })
    public md!: number | object;

    @Prop({
        type: [Number, Object],
    })
    public sm!: number | object;

    @Prop({
        type: [Number, Object],
    })
    public xs!: number | object;

    public get propsSizeClass(): object {
        const result: { [key: string]: boolean } = {};

        ['xl', 'lg', 'md', 'sm', 'xs'].forEach(item => {
            const size = this[item];

            if (typeof size === 'number') {
                result [`${prefixCls}col-${item}-${size}`] = true;
            }
            else if (typeof  size === 'object') {
                Object.keys(size).forEach(prop => {
                    if (prop === 'hide') {
                        result[`hidden-${item}-${(size[prop] === 'only' ? '' : 'and-')}${size[prop]}`] = true;
                    }
                    else {
                        result[`${prefixCls}col-${item}${(prop === 'span' ? '' : `-${prop}`)}-${size[prop]}`] = true;
                    }
                });
            }
        });
        return result;
    }

    public get propsClass(): object {
        const { span, offset, push, pull } = this;

        return {
            [`${prefixCls}col-${span}`]: !!span,
            [`${prefixCls}col-offset-${offset}`]: !!offset,
            [`${prefixCls}col-push-${push}`]: !!push,
            [`${prefixCls}col-pull-${pull}`]: !!pull,
        };
    }

    public get gutterStyle(): object {
        let parent: any = this.$parent;
        let result: { [key: string]: string } = {};

        while (parent && parent.$options._componentTag !== `${prefixCls}row`) {
            parent = parent.$parent;
        }

        if (parent.gutter) {
            const val = `${parent.gutter / 2}px`;
            result = {
                paddingLeft: val,
                paddingRight: val,
            };
        }

        return result;
    }

    public get className(): object {
        const { propsSizeClass, propsClass } = this;

        return {
            ...propsSizeClass,
            ...propsClass
        };
    }

    public render(h: CreateElement): VNode {
        const { tag: Tag, className, gutterStyle, $slots } = this;

        return (
            <Tag class={className} style={gutterStyle}>{$slots.default}</Tag>
        );
    }
}

export default Col;
