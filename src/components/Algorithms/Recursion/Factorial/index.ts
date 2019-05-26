/**
 * Факториал числа.
 * Лучше использовать цикл.
 * @param {number} num - число
 */
function factorial(num: number): number {
    if (num < 0) return NaN;
    if (num < 2) return 1;

    return factorial(num - 1) * num;
}

export default factorial;
