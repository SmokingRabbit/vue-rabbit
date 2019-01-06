import * as process from 'process';

export const prefixCls: string = 'rbt-';

export function oneOf(param: string, list: string[]): boolean {
    return list.includes(param);
}

export function stopPropagation(e: MouseEvent) {
    e.stopPropagation();
}

export function devWarn(t: string): void {
    process.env.NODE_ENV !== 'production' && console.warn(t);
}

export function objAssign( ...ags): object {
    return Object.assign({}, ...ags);
}

export function propOfPath(obj: object , path: string , strict: boolean = false ): {object: any , key: any , value: any} {
    let tempObj = obj;
    path = path.replace(/\[(\w+)]/g, '.$1');
    const keyArr = path.replace(/^\./, '').split('.');

    let i = 0;

    for (i; i < keyArr.length - 1; ++i) {
        if (typeof tempObj !== 'object' && !strict) {
            break;
        }
        const key = keyArr[i];
        if (key in tempObj) {
            tempObj = tempObj[key];
        } else {
            if (strict) {
                throw new Error('please transfer a valid prop path to form item!');
            }
            break;
        }
    }

    return {
        object: tempObj,
        key: keyArr[i],
        value: tempObj ? tempObj[keyArr[i]] : null
    };
}

export function cloneOf(any: any): any {
    return JSON.parse(JSON.stringify(any));
}

export function isNumeric(obj: any): boolean {
    return !Array.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
}

export function explodeLen(str: string): any {
    let results;
    results =  /([0-9.]*)([a-z%]*)/g.exec(str);

    return {
        value: parseFloat(results[1]),
        len: results[2]
    };
}

export function isKorean(text: string): boolean {
    const reg = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi;
    return reg.test(text);
}
