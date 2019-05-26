import { factorial, gcd, pow } from 'components/Algorithms/Recursion';

describe('Рекурсивные алгоритмы', () => {
    it('Factorial', () => {
        expect(factorial(0)).toBe(1);
        expect(factorial(1)).toBe(1);
        expect(factorial(2)).toBe(2);
        expect(factorial(-5)).toBe(NaN);
        expect(factorial(4)).toBe(24);
        expect(factorial(8)).toBe(40320);
        expect(factorial(9)).toBe(362880);
    });
    it('GCD', () => {
        expect(gcd(0, 2)).toBe(2);
        expect(gcd(4, 2)).toBe(2);
        expect(gcd(4, -2)).toBe(NaN);
        expect(gcd(18, 8)).toBe(2);
        expect(gcd(25, 10)).toBe(5);
    });
    it('Pow', () => {
        expect(pow(-1)).toBe(1);
        expect(pow(5)).toBe(25);
        expect(pow(9)).toBe(81);
        expect(pow(4, 3)).toBe(64);
        expect(pow(4, 0)).toBe(1);
        expect(pow(5, -1)).toBe(NaN);
        expect(pow(5, 30)).toBe(931322574615478500000);
    });
});
