import List from 'components/Structure/List';

/**
 * Квадратичная сортировка вставками.
 * Сложность - O(N2).
 * Сравнение текущего и предыдущего элемента, если предыдущий меньше текущего меняем их местами.
 * Когда текущий больше или равен предыдущему пропускаем итерацию.
 * ```
 * [ 4, 2, 5, 1, 3 ]
 * [ 2, 4, 5, 1, 3 ]
 * [ 2, 4, 1, 5, 3 ]
 * [ 2, 1, 4, 5, 3 ]
 * [ 1, 2, 4, 5, 3 ]
 * [ 1, 2, 4, 3, 5 ]
 * [ 1, 2, 3, 4, 5 ]
 * ```
 * @param A - исходный массив
 */
function insertSort(A: (number | string)[]): (number | string)[] {
    for (let k = 1; k < A.length; k++) {
        for (let m = k; m > 0; m--) {
            const prev = A[m - 1];

            if (A[m] >= prev) break;
            if (A[m] < prev) {
                A[m - 1] = A[m]; A[m] = prev;
            }
        }
    }

    return A;
}

function listInsertSort(A: (number | string)[]): (number | string)[] {
    const list = new List<number | string>();

    for (const item of A) list.insert(item);

    let i = 0;

    while (!list.isEmpty()) {
        const link = list.deleteFirst();

        if (!link) break;

        A[i] = link.data;
        i++;
    }

    return A;
}

export { listInsertSort };
export default insertSort;
