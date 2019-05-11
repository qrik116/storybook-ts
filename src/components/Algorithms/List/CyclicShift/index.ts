/**
 * Циклический сдвиг
 * @param {array} A Исходный массив
 * @param {boolean} dir направление, true - влево, false - вправо
 */
function cyclicShift<A>(A: A[], dir: boolean = true): A[] {
    let tmp: A | null = null;

    if (dir) {
        tmp = A[0];

        for (let i = 1; i < A.length; i++) {
            A[i - 1] = A[i];
        }

        A[A.length - 1] = tmp;
    } else {
        tmp = A[A.length - 1];

        for (let i = A.length - 1; i > 0; i--) {
            A[i] = A[i - 1];
        }

        A[0] = tmp;
    }

    return A;
}

export default cyclicShift;
