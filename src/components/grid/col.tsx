import Vue, {CreateElement, VNode} from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {oneOf, prefixCls} from '../../utils/assist';

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
        type: Number,
        validator(prop: number): boolean {
            return (prop >= 0 && prop <= 24);
        }
    })
    public order!: number;

    @Prop({
        type: String,
        validator(prop: string): boolean {
            return oneOf(prop, ['top', 'bottom', 'middle', 'baseline', 'stretch']);
        }
    })
    public align!: 'top' | 'bottom' | 'middle' | 'baseline' | 'stretch';

    @Prop({
        type: [Number, Object],
    })
    public xl!: number | {
        span: number,
        pull?: number,
        push?: number,
        order?: number,
        hide?: 'only' | 'down' | 'up',
        align?: 'top' | 'middle' | 'bottom' | 'baseline' | 'stretch'
    };

    @Prop({
        type: [Number, Object],
    })
    public lg!: number | {
        span: number,
        pull?: number,
        push?: number,
        order?: number,
        hide?: 'only' | 'down' | 'up',
        align?: 'top' | 'middle' | 'bottom' | 'baseline' | 'stretch'
    };

    @Prop({
        type: [Number, Object],
    })
    public md!: number | {
        span: number,
        pull?: number,
        push?: number,
        order?: number,
        hide?: 'only' | 'down' | 'up',
        align?: 'top' | 'middle' | 'bottom' | 'baseline' | 'stretch'
    };

    @Prop({
        type: [Number, Object],
    })
    public sm!: number | {
        span: number,
        pull?: number,
        push?: number,
        order?: number,
        hide?: 'only' | 'down' | 'up',
        align?: 'top' | 'middle' | 'bottom' | 'baseline' | 'stretch'
    };

    @Prop({
        type: [Number, Object],
    })
    public xs!: number | {
        span: number,
        pull?: number,
        push?: number,
        order?: number,
        hide?: 'only' | 'down' | 'up',
        align?: 'top' | 'middle' | 'bottom' | 'baseline' | 'stretch'
    };

    public get propsSizeClass(): string {
        const result: any = [];

        ['xl', 'lg', 'md', 'sm', 'xs'].forEach((item) => {
            let data = this[item];
            if (!data && data !== 0) {
                return;
            }

            data = (typeof data === 'number')
                ? {span: data}
                : data;
            this.propSizeRead(data, item, result);
        });

        return result.join(' ');
    }

    private propSizeRead(data: object, size: string, result): void {
        const prefix = `${prefixCls}col-${size}`;

        Object.keys(data).forEach(prop => {
            const val = data[prop];

            if (prop === 'hide') {
                const type = (val === 'only') ? '' : 'and-';
                result.push(`hidden-grid-${size}-${type}${val}`);
            }
            else {
                result.push(`${prefix}-${prop}-${val}`);
            }
        });
    }

    public get propsClass(): object {
        const {span, offset, push, pull, order, align} = this;

        return {
            [`${prefixCls}col-span-${span}`]: !!span,
            [`${prefixCls}col-offset-${offset}`]: !!offset,
            [`${prefixCls}col-align-${align}`]: !!align,
            [`${prefixCls}col-order-${order}`]: !!order,
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
        const {propsSizeClass, propsClass} = this;

        return {
            ...propsClass,
            [propsSizeClass]: !!propsSizeClass
        };
    }

    public render(h: CreateElement): VNode {
        const {tag: Tag, className, gutterStyle, $slots} = this;

        return (
            <Tag class={className} style={gutterStyle}>{$slots.default}</Tag>
        );
    }
}

export default Col;
