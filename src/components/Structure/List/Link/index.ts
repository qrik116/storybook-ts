interface ILink<T> {
    next: ILink<T> | null;
}

/** Элемент списка */
class Link<T> implements ILink<T> {
    private _data: T = 0 as any;
    private _nextLink: Link<T> | null = null;
    private _previousLink: Link<T> | null = null;

    constructor(data: T) {
        this.data = data;
    }

    set data(v: T) {
        this._data = v;
    }
    get data(): T {
        return this._data;
    }

    set next(v: Link<T> | null) {
        if (v instanceof Link || v === null) this._nextLink = v;
    }
    get next(): Link<T> | null {
        return this._nextLink;
    }

    set previous(v: Link<T> | null) {
        if (v instanceof Link || v === null) this._previousLink = v;
    }
    get previous(): Link<T> | null {
        return this._previousLink;
    }

    getValueToPrint() {
        return String(this.data);
    }
}

export default Link;
