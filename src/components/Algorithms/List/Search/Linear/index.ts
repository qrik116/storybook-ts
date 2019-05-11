/**
 * Линейный поиск.
 * Осуществляет поиск первого элемента x в списке A.
 * @param {(string | number)[]} A Массив элементов
 * @param {string | number} x Искомый элемент
 * @return {number} Порядковый номер искомого элемента от 0 - N-1 включительно, если не найден -1
 */
function linearSearch(A: (string | number)[], x: string | number): number {
    for (const [i, item] of A.entries()) {
        if (item === x) return i;
    }

    return -1;
}

export default linearSearch;
