import Link from './Link';
import ListIterator from './Iterator';

/** Связный список */
class List<T> {
    private first: Link<T> | null = null;
    private last: Link<T> | null = null;
    private iterator: ListIterator<T>;

    constructor(arr: T[] = []) {
        this.iterator = this.getIterator();

        for (const item of arr) this.insertLast(item);
    }

    isEmpty() {
        return !this.first;
    }

    setFirst(link: Link<T> | null) {
        if (link) link.previous = null;
        this.first = link;
    }
    getFirst() {
        return this.first;
    }

    setLast(link: Link<T> | null) {
        if (link) link.next = null;
        this.last = link;
    }
    getLast() {
        return this.last;
    }

    insertFirst(value: T) {
        this.iterator.reset();
        this.iterator.insertBefore(value);
    }

    deleteFirst() {
        this.iterator.reset();
        return this.iterator.deleteCurrent();
    }

    insertLast(value: T) {
        this.iterator.reset('last');
        this.iterator.insertAfter(value);
    }

    deleteLast() {
        this.iterator.reset('last');
        return this.iterator.deleteCurrent();
    }

    insertBefore(current: T | '__ITERATOR__', val: T) {
        if (current !== '__ITERATOR__') this.find(current);

        this.iterator.insertBefore(val);
    }

    insertAfter(current: T | '__ITERATOR__', val: T) {
        if (current !== '__ITERATOR__') this.find(current);

        this.iterator.insertAfter(val);
    }

    find(val: T) {
        if (this.isEmpty()) return;

        this.iterator.reset();

        while ((this.iterator.getCurrent() as Link<T>).data !== val) {
            if (this.iterator.atEnd()) return;
            this.iterator.nextLink();
        }

        return this.iterator.getCurrent();
    }

    delete(val: T) {
        this.find(val);

        return this.iterator.deleteCurrent();
    }

    insert(val: T) {
        this.iterator.reset();

        let current = this.iterator.getCurrent();

        while (current !== null && val > current.data) {
            current = this.iterator.nextLink();
        }

        this.insertBefore('__ITERATOR__', val);
    }

    getIterator(): ListIterator<T> {
        return new ListIterator(this);
    }

    getValue(direction: 'forward' | 'backward' = 'forward') {
        this.iterator.reset(direction === 'forward' ? 'first' : 'last');
        let current = this.iterator.getCurrent();
        let result = '';

        while (current) {
            result += current.getValueToPrint() + ' ';

            current = (direction === 'forward') ? this.iterator.nextLink() : this.iterator.previousLink();
        }

        return result.trim();
    }
}

export default List;
