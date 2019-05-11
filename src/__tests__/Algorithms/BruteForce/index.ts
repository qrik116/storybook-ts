import { factorizeNumber, isSimpleNumber } from 'components/Algorithms/BruteForce';

describe('BruteForce', () => {
    it('factorizeNumber', () => {
        expect(factorizeNumber(0)).toEqual([]);
        expect(factorizeNumber(4)).toEqual([2, 2]);
        expect(factorizeNumber(6)).toEqual([2, 3]);
        expect(factorizeNumber(9)).toEqual([3, 3]);
        expect(factorizeNumber(25)).toEqual([5, 5]);
        expect(factorizeNumber(30)).toEqual([2, 3, 5]);
    });

    it('isSimpleNumber - Составное число', () => {
        expect(isSimpleNumber(0)).toBe(false);
        expect(isSimpleNumber(1)).toBe(false);
        expect(isSimpleNumber(4)).toBe(false);
        expect(isSimpleNumber(6)).toBe(false);
        expect(isSimpleNumber(9)).toBe(false);
        expect(isSimpleNumber(99999)).toBe(false);
    });
    it('isSimpleNumber - Простое число', () => {
        expect(isSimpleNumber(7)).toBe(true);
        expect(isSimpleNumber(13)).toBe(true);
        expect(isSimpleNumber(97)).toBe(true);
        expect(isSimpleNumber(557)).toBe(true);
        expect(isSimpleNumber(839)).toBe(true);
        expect(isSimpleNumber(991)).toBe(true);
    });
});
