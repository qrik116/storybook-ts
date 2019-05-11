/**
 * Решето Эратосфена, поиск простых чисел
 * @param {number} A - Крайнее значения поиска простого числа
 * @return {number[]} простые числа
 */
function eratosfen(n: number): number[] {
    const tmpResult: boolean[] = [false, false];
    const result: number[] = [];

    for (let k = 2; k < n; k++) tmpResult[k] = true;
    for (let k = 2; k < n; k++) {
        if (tmpResult[k]) {
            for (let m = k * k; m < n; m += k) tmpResult[m] = false;
        }
    }

    for (let i = 0; i < n; i++) {
        if (tmpResult[i]) result.push(i);
    }

    return result;
}

export default eratosfen;
