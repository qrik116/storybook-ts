import List from 'components/Structure/List';
import Link from 'components/Structure/List/Link';

describe('Проверка структуры "Список"', () => {
    it('должен создаваться', () => {
        const instance = new List();

        expect(instance.getFirst()).toBeNull();
        expect(instance.getLast()).toBeNull();
        expect(instance.getValue()).toBe('');
    });
    it('должен указывать на пустоту', () => {
        let instance = new List();

        expect(instance.isEmpty()).toBeTruthy();

        instance = new List([2]);

        expect(instance.isEmpty()).toBeFalsy();
    });
    it('должен вставлять элементы в конец и в начало', () => {
        const instance = new List([1, 5, 3, 9]);

        expect((instance.getFirst() as Link<any>).data).toBe(1);
        expect((instance.getLast() as Link<any>).data).toBe(9);

        instance.insertFirst(10);
        instance.insertLast(20);

        expect((instance.getFirst() as Link<any>).data).toBe(10);
        expect((instance.getLast() as Link<any>).data).toBe(20);
    });
    it('должен вставлять элементы до и после', () => {
        const instance = new List([1, 5, 3, 9]);

        expect((instance.getFirst() as Link<any>).data).toBe(1);
        expect((instance.getLast() as Link<any>).data).toBe(9);

        instance.insertAfter(9, 10);
        instance.insertBefore(1, 20);

        expect((instance.getFirst() as Link<any>).data).toBe(20);
        expect((instance.getLast() as Link<any>).data).toBe(10);
    });
    it('должен быть отсортированный', () => {
        const instance = new List<number>();

        instance.insert(1);
        instance.insert(5);
        instance.insert(3);
        instance.insert(9);
        instance.insert(40);
        instance.insert(20);
        instance.insert(10);

        expect(instance.getValue()).toBe('1 3 5 9 10 20 40');
    });
    it('должен удалять элементы', () => {
        const instance = new List(['2', 'as', 'bb', 23, 45]);

        instance.delete('as');
        expect(instance.getValue()).toBe('2 bb 23 45');

        instance.deleteFirst();
        expect(instance.getValue()).toBe('bb 23 45');

        instance.deleteLast();
        expect(instance.getValue()).toBe('bb 23');
    });
    it('должен находить элементы', () => {
        const instance = new List(['2', 'as', 'bb', 23, 45]);

        expect(instance.find('as')).toBeTruthy();
        expect(instance.find(33)).toBeFalsy();

        expect(instance.getValue()).toBe('2 as bb 23 45');
    });
    it('должен выводить значения', () => {
        const instance = new List(['2', 'as', 'bb', 23, 45]);

        expect(instance.getValue()).toBe('2 as bb 23 45');
        expect(instance.getValue('backward')).toBe('45 23 bb as 2');
    });
    it('должен возвращать правильные элементы первого и последнего порядка', () => {
        let instance = new List<string | number>();

        expect(instance.getFirst()).toBeNull();
        expect(instance.getLast()).toBeNull();

        instance = new List(['as', 2, 4, 5, 70]);

        instance.delete('as');
        instance.delete(70);
        let first = instance.getFirst() as Link<any>;
        let last = instance.getLast() as Link<any>;

        expect(first.data).toBe(2);
        expect(first.previous).toBe(null);
        expect(first.next).toBeTruthy();
        expect(last.data).toBe(5);
        expect(last.previous).toBeTruthy();
        expect(last.next).toBe(null);

        instance.deleteFirst();

        first = instance.getFirst() as Link<any>;
        last = instance.getLast() as Link<any>;
        expect(first.data).toBe(4);
        expect(first.previous).toBe(null);
        expect(first.next).toBeTruthy();
        expect(last.data).toBe(5);
        expect(last.previous).toBeTruthy();
        expect(last.next).toBe(null);

        instance.deleteLast();

        first = instance.getFirst() as Link<any>;
        last = instance.getLast() as Link<any>;
        expect(first.data).toBe(4);
        expect(first.previous).toBe(null);
        expect(first.next).toBe(null);
        expect(last.data).toBe(4);
        expect(last.previous).toBe(null);
        expect(last.next).toBe(null);

        instance = new List([7, 2, 4, 5, 70]);

        instance.insertFirst(10);
        instance.insertLast(20);
        instance.insert(100);
        instance.insertAfter(100, 12);
        instance.insertBefore(10, 1);

        first = instance.getFirst() as Link<any>;
        last = instance.getLast() as Link<any>;
        expect(first.data).toBe(1);
        expect(first.previous).toBe(null);
        expect(first.next).toBeTruthy();
        expect(last.data).toBe(12);
        expect(last.previous).toBeTruthy();
        expect(last.next).toBe(null);
    });
});
