/**
 * Быстрое возведение в степень
 * @param {number} num число возводящееся в степень
 */
function pow(num: number, p: number = 2): number {
    if (p === 0) return 1;
    if (p < 0) return NaN;

    return p % 2 ? pow(num, p - 1) * num : pow(num * num, Math.floor(p / 2));
}

export default pow;
