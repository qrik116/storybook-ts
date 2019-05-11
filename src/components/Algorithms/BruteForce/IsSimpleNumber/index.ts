/**
 * Определяет является ли число простым.
 * Если простое возвращает true, иначе false.
 * @param {number} num - целое число
 */
function isSimpleNumber(num: number): boolean {
    let devisor = 2;

    if (num === 0 || num === 1) return false;

    while (devisor < num) {
        if (!(num % devisor)) return false;
        devisor++;
    }

    return true;
}

export default isSimpleNumber;
