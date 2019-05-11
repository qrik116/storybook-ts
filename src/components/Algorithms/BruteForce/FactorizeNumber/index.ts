/**
 * Разложение числа на множетели
 * @param {number} num - целое число
 * @return {number[]} массив чисел
 */
function factorizeNumber(num: number): number[] {
    const result: number[] = [];
    let devisor = 2;

    while (num > 1) {
        if (!(num % devisor)) {
            num /= devisor;
            result.push(devisor);
        } else {
            devisor++;
        }
    }

    return result;
}

export default factorizeNumber;
