/**
 * Алгорит Эвклида.
 * Нахождение наибольшего общего делителя (Grand Command Divisor).
 * @param {number} a 1 число
 * @param {number} b 2 число
 */
function gcd(a: number, b: number): number {
    if (a < 0 || b < 0) return NaN;

    return b === 0 ? a : gcd(b, a % b);
}

export default gcd;
