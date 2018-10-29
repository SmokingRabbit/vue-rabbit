export function on(ele: HTMLElement, event: string, listener: any): void {
    ele.addEventListener(event, listener, false);
}

export function off(ele: HTMLElement, event: string, listener: any): void {
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
