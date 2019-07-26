import Link from './Link';

/** Связный список */
class List<T> {
    private first: Link<T> | null = null;
    private last: Link<T> | null = null;

    constructor(arr: T[] = []) {
        for (const item of arr) this.insertLast(item);
    }

    isEmpty() {
        return !this.first;
    }

    insertFirst(value: T) {
        const newLink = new Link(value);

        if (!this.first) {
            this.last = newLink;
        } else {
            this.first.previous = newLink;
        }

        newLink.next = this.first;
        this.first = newLink;
    }

    deleteFirst() {
        if (!this.first) return;

        const temp = this.first;

        if (!this.first.next) {
            this.last = null;
        } else {
            this.first.next.previous = null;
        }

        this.first = this.first.next;
        return temp;
    }

    insertLast(value: T) {
        const newLink = new Link(value);

        if (!this.last) {
            this.first = newLink;
        } else {
            this.last.next = newLink;
        }

        newLink.previous = this.last;
        this.last = newLink;
    }

    deleteLast() {
        if (!this.last) return;

        const temp = this.last;

        if (!this.last.previous) {
            this.first = null;
        } else {
            this.last.previous.next = null;
        }

        this.last = this.last.previous;
        return temp;
    }

    insertBefore(current: T | Link<T> | null, val: T) {
        const currLink = current instanceof Link ? current : current ? this.find(current) : null;

        if (!currLink) {
            this.insertLast(val);
        } else {
            const newLink = new Link(val);

            if (currLink === this.first) {
                this.first = newLink;
            }

            newLink.next = currLink;
            newLink.previous = currLink.previous;

            if (currLink.previous) currLink.previous.next = newLink;
            currLink.previous = newLink;
        }
    }

    insertAfter(current: T | Link<T> | null, val: T) {
        const currLink = current instanceof Link ? current : current ? this.find(current) : null;

        if (!currLink) {
            this.insertLast(val);
        } else {
            const newLink = new Link(val);

            if (currLink === this.last) {
                this.last = newLink;
            } else {
                newLink.next = currLink.next;

                if (currLink.next) currLink.next.previous = newLink;
            }

            newLink.previous = currLink;
            currLink.next = newLink;
        }
    }

    getFirst() {
        return this.first;
    }

    getLast() {
        return this.last;
    }

    find(val: T) {
        if (!this.first) return;

        let current = this.first;

        while (current.data !== val) {
            if (!current.next) return;

            current = current.next;
        }

        return current;
    }

    delete(val: T) {
        const currLink = this.find(val);

        if (!currLink) return;

        if (currLink === this.last) {
            this.last = currLink.previous;
        } else {
            if (currLink.next) currLink.next.previous = currLink.previous;
        }

        if (currLink === this.first) {
            this.first = currLink.next;
        } else {
            if (currLink.previous) currLink.previous.next = currLink.next;
        }

        return currLink;
    }

    insert(val: T) {
        let current = this.first;

        while (current !== null && val > current.data) {
            current = current.next;
        }

        this.insertBefore(current, val);
    }

    getValue(direction: 'forward' | 'backward' = 'forward') {
        let current = direction === 'forward' ? this.first : this.last;
        let result = '';

        while (current !== null) {
            result += current.getValueToPrint() + ' ';

            current = direction === 'forward' ? current.next : current.previous;
        }

        return result.trim();
    }
}

export default List;
