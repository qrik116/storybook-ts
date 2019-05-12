/**
 * Квадратичная сортировка методом пузырька.
 * Сравнение текущего и следующего элемента, если следующий меньше текущего меняем их местами.
 * Тем самым поднимаеся самое большое значение.
 * После каждой итерации правая часть становится не нужной для проверки.
 * Добавлен флаг обмена, если обмена не произошло за итерацию, значит массив отсортирован и можно завершать выполнение.
 * ```
 * [ 4, 2, 5, 1, 3 ]
 * [ 2, 4, 5, 1, 3 ]
 * [ 2, 4, 1, 5, 3 ]
 * [ 2, 4, 1, 3, 5 ]
 * [ 2, 1, 4, 3, 5 ]
 * [ 2, 1, 3, 4, 5 ]
 * [ 1, 2, 3, 4, 5 ]
 * ```
 * @param A - исходный массив
 */
function bubbleSort(A: (number | string)[]): (number | string)[] {
    for (let k = 0; k < A.length - 1; k++) {
        let change = false;

        for (let m = 0; m < A.length - k - 1; m++) {
            const temp = A[m];

            if (A[m + 1] < temp) {
                change = true;
                A[m] = A[m + 1]; A[m + 1] = temp;
            }
        }

        if (!change) break;
    }

    return A;
}

export default bubbleSort;
