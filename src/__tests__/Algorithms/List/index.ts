import { Search, reverse, cyclicShift, Sort } from 'components/Algorithms/List';

describe('Алгоритмы со списком', () => {
    describe('Main', () => {
        it('Reverse', () => {
            const A = [1, 2, 3, 4];
            const B = ['15', '28', '13', '4', '95'];

            reverse(A);
            expect(A).toEqual([4, 3, 2, 1]);
            reverse(B);
            expect(B).toEqual(['95', '4', '13', '28', '15']);
        });

        it('CyclicShift direction left', () => {
            const A = [1, 2, 3, 4];
            const B = ['15', '28', '13', '4', '95'];

            cyclicShift(A);
            expect(A).toEqual([2, 3, 4, 1]);
            cyclicShift(B);
            expect(B).toEqual(['28', '13', '4', '95', '15']);
        });

        it('CyclicShift direction right', () => {
            const A = [1, 2, 3, 4];
            const B = ['15', '28', '13', '4', '95'];

            cyclicShift(A, false);
            expect(A).toEqual([4, 1, 2, 3]);
            cyclicShift(B, false);
            expect(B).toEqual(['95', '15', '28', '13', '4']);
        });
    });

    describe('Search', () => {
        it('Linear', () => {
            expect(Search.linear([], 0)).toBe(-1);
            expect(Search.linear([1, 3, 4, 5, 6], 5)).toBe(3);
            expect(Search.linear([-1, 3, 4, -5, 6], -1)).toBe(0);
            expect(Search.linear([1, 3, 4, 5, 6], 12)).toBe(-1);
            expect(Search.linear([1, 1, 1, 5, 6], 1)).toBe(0);

            expect(Search.linear([], '')).toBe(-1);
            expect(Search.linear(['1', '3', '4', '5', '6'], '5')).toBe(3);
            expect(Search.linear(['1', '3', '4', '5', '6'], '12')).toBe(-1);
        });
    });

    describe('Sort', () => {
        function checkSort(fn: (...args: any) => any) {
            expect(fn([4, 2, 5, 1, 3])).toEqual([1, 2, 3, 4, 5]);
            expect(fn([4, 2, 5, 5, 3])).toEqual([2, 3, 4, 5, 5]);
            expect(fn([10, 5 , 11, 0])).toEqual([0, 5, 10, 11]);
            expect(fn([5, -2, -1, 3])).toEqual([-2, -1, 3, 5]);
            expect(fn([3, 5, 1, 2, 1, 10, 5])).toEqual([1, 1, 2, 3, 5, 5, 10]);
            expect(fn([4, 2, 4, 2, 1])).toEqual([1, 2, 2, 4, 4]);

            expect(fn(['a', 'b', '1', '3', 'gh'])).toEqual(['1', '3', 'a', 'b', 'gh']);
        }

        it('Insert', () => checkSort(Sort.insert));

        it('Choise', () => checkSort(Sort.choise));

        it('Bubble', () => checkSort(Sort.bubble));
    });
});
