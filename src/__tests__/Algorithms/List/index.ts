import { linearSearch, reverse, cyclicShift } from 'components/Algorithms/List';

describe('Алгоритмы со списком', () => {
    it('LinearSearch', () => {
        expect(linearSearch([], 0)).toBe(-1);
        expect(linearSearch([1, 3, 4, 5, 6], 5)).toBe(3);
        expect(linearSearch([-1, 3, 4, -5, 6], -1)).toBe(0);
        expect(linearSearch([1, 3, 4, 5, 6], 12)).toBe(-1);
        expect(linearSearch([1, 1, 1, 5, 6], 1)).toBe(0);

        expect(linearSearch([], '')).toBe(-1);
        expect(linearSearch(['1', '3', '4', '5', '6'], '5')).toBe(3);
        expect(linearSearch(['1', '3', '4', '5', '6'], '12')).toBe(-1);
    });

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
