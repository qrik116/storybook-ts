import Link from '../Link';
import List from '../';

export interface IIterator<T> {
    reset(): void;
    atStart(): boolean;
    atEnd(): boolean;
    nextLink(): Link<T> | null;
    previousLink(): Link<T> | null;
    getCurrent(): Link<T> | null;
    insertBefore(val: T): void;
    insertAfter(val: T): void;
    deleteCurrent(): Link<T> | null;
}

class ListIterator<T> implements IIterator<T> {
    private current: Link<T> | null;
    private previous: Link<T> | null;
    private list: List<T>;

    constructor(list: List<T>) {
        this.current = null;
        this.previous = null;
        this.list = list;

        this.reset();
    }

    reset(direction: 'first' | 'last' = 'first') {
        this.current = direction === 'first' ? this.list.getFirst() : this.list.getLast();

        if (this.current) this.previous = this.current.previous;
    }

    atStart() {
        return !this.current || !this.current.previous;
    }
    atEnd() {
        return !this.current || !this.current.next;
    }

    nextLink() {
        if (!this.current) return null;

        this.previous = this.current;
        this.current = this.current.next;

        return this.current;
    }
    previousLink() {
        if (!this.current) return null;

        this.current = this.previous;
        if (this.previous) this.previous = this.previous.previous;

        return this.current;
    }

    getCurrent() {
        return this.current;
    }

    insertBefore(val: T) {
        const newLink = new Link(val);

        if (!this.previous) {
            newLink.next = this.list.getFirst();
            this.list.setFirst(newLink);

            if (this.list.isEmpty()) this.list.setLast(newLink);
            this.reset();
        } else {
            newLink.next = this.current;
            newLink.previous = this.previous;

            this.previous.next = newLink;
            if (this.current) this.current.previous = newLink;

            this.current = newLink;
        }
    }

    insertAfter(val: T) {
        const newLink = new Link(val);

        if (this.list.isEmpty()) {
            this.list.setFirst(newLink);
            this.list.setLast(newLink);
            this.current = newLink;
        } else {
            newLink.previous = this.current;

            if (this.current) {
                newLink.next = this.current.next;
                if (this.current.next) {
                    this.current.next.previous = newLink;
                } else {
                    this.list.setLast(newLink);
                }
                this.current.next = newLink;
            }

            this.nextLink();
        }
    }

    deleteCurrent() {
        if (!this.current) return null;

        const link = this.current;

        if (!this.previous) {
            this.list.setFirst(this.current.next);
            this.reset();
        } else {
            this.previous.next = this.current.next;
            if (this.atEnd()) {
                this.list.setLast(this.previous);
                this.reset();
            } else {
                this.nextLink();
            }
        }
        return link;
    }
}

export default ListIterator;
