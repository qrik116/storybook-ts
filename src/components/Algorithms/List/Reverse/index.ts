/**
 * Обращение массива.
 * @param {Array} A Исходный массив
 */
function reverse<A>(A: A[]) {
    const size = A.length;

    for (let i = 0; i < Math.floor(size / 2); i++) {
        [A[i], A[size - 1 - i]] = [A[size - 1 - i], A[i]];
    }

    return A;
}

export default reverse;
