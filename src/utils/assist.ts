export const prefixCls: string = 'rbt-';

export function oneOf(param: string, list: string[]): boolean {
    return list.includes(param);
}

export function stopPropagation(e: MouseEvent) {
    e.stopPropagation();
}
