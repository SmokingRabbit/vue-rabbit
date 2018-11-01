export function on(ele: HTMLElement | Window, event: string, listener: any): void {
    ele.addEventListener(event, listener, false);
}

export function off(ele: HTMLElement | Window, event: string, listener: any): void {
    ele.removeEventListener(event, listener);
}

export function rect(ele: HTMLElement): ClientRect | DOMRect {
    return ele.getBoundingClientRect();
}

export interface OffsetRect {
    width: number;
    height: number;
    top: number;
    left: number;
}

export function offset(ele: HTMLElement): OffsetRect {
    const r = rect(ele);
    let top = 0;
    let left = 0;

    if (typeof window.pageYOffset !== 'undefined') {
        top = window.pageYOffset;
        left = window.pageXOffset;
    }
    else if (typeof document.compatMode !== 'undefined' && document.compatMode !== 'BackCompat') {
        top = (document.documentElement as HTMLElement).scrollTop;
        left = (document.documentElement as HTMLElement).scrollLeft;
    }
    else if (typeof document.body !== 'undefined') {
        top = document.body.scrollTop;
        left = document.body.scrollLeft;
    }

    return {
        width: r.width,
        height: r.height,
        top: r.top + top,
        left: r.left + left
    };
}

export function attr(ele: HTMLElement, property: {[key: string]: string} | string, val?: string): string | null{
    if (typeof property === 'object') {
        for (const key in property) {
            if (typeof property[key] === 'string' || typeof property[key] === 'number') {
                ele.setAttribute(key, property[key]);
            }
        }
    }
    else if (typeof property === 'string') {
        if (val) {
            ele.setAttribute(property, val);
        }
        else {
            return ele.getAttribute(property);
        }
    }

    return null;
}

export function removeAttr(ele: HTMLElement, property: string) {
    ele.removeAttribute(property);
}

export function addClass(ele: HTMLElement, classNames: string | string[]): void {
    const orginClasses = attr(ele, 'class');
    let splitClasses: string[] = [];

    if (orginClasses !== null) {
        splitClasses = orginClasses.split(/\s+/);
    }

    classNames = Array.isArray(classNames) ? classNames : [classNames];
    classNames = classNames.concat(splitClasses);
    ele.setAttribute('class', classNames.join(' '));
}

export function removeClass(ele: HTMLElement, classNames: string | string[]) {
    const orginClasses = attr(ele, 'class');

    if (orginClasses === null) {
        return;
    }

    const splitClasses: string[] = orginClasses.split(/\s+/);

    classNames = Array.isArray(classNames) ? classNames : [classNames];
    classNames.forEach((name) => {
        splitClasses.splice(splitClasses.indexOf(name), 1);
    });
    ele.setAttribute('class', splitClasses.join(' '));
}
