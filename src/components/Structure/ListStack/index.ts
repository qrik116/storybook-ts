import { IStack } from '../Stack';
import List from '../List';

class ListStack<T> implements IStack<T> {
    private list = new List<T>();

    constructor(arr: T[] = []) {
        for (const item of arr) this.push(item);
    }

    push(item: T) {
        this.list.insertFirst(item);
    }

    pop() {
        const link = this.list.deleteFirst();

        if (!link) return;

        return link.data;
    }

    peek() {
        const last = this.list.getLast();

        if (!last) return;

        return last.data;
    }

    isEmpty() {
        return this.list.isEmpty();
    }

    display() {
        const log = `Stack (top --> bottom): ${this.list.getValue()}`;

        console.log(log);
        return log;
    }
}

export default ListStack;
