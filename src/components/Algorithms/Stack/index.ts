class Stack<T> {
    private maxSize: number = 0;
    private stackArr: T[] = [];
    private top = -1;

    constructor(size: number) {
        this.maxSize = size;
        this.stackArr = new Array(size);
    }

    public push(j: T) {
        if (this.isFull()) return;

        this.stackArr[++this.top] = j;
    }

    public pop() {
        if (this.isEmpty()) return;

        return this.stackArr[this.top--];
    }

    public peek() {
        if (this.isEmpty()) return;

        return this.stackArr[this.top];
    }

    public isEmpty() {
        return this.top === -1;
    }

    public isFull() {
        return this.top === this.maxSize - 1;
    }

    public display() {
        const result: T[] = [];

        for (let i = 0; i <= this.top; i++) {
            result[i] = this.stackArr[i];
        }

        return result;
    }
}

export default Stack;
