export const prefixCls: string = 'rbt-';

export function oneOf(param: string, list: string[]): boolean {
    return list.includes(param);
}

export function customClassToObject(str: string) {
    return str.split(' ').map((each: string) => {
        return {[each]: true};
    });
}
