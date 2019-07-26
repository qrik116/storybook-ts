import List from '../List';

class ListQueue<T> {
    private list = new List<T>();

    constructor(arr: T[] = []) {
        for (const item of arr) this.insert(item);
    }

    isEmpty() {
        return this.list.isEmpty();
    }

    insert(val: T) {
        this.list.insertLast(val);
    }

    remove() {
        const link = this.list.deleteFirst();

        if (!link) return;

        return link.data;
    }

    display() {
        const log = `Queue (front --> rear): ${this.list.getValue()}`;

        console.log(log);
        return log;
    }
}

export default ListQueue;
