/**
 * @param A - кол-во матрёшек
 */
function matryoshka(n: number) {
    if (n === 1) {
        console.log('Матрешка');
        return;
    }

    console.log('Вверх матрешки n = ', n);
    matryoshka(n - 1);
    console.log('Низ матрешки n = ', n);
}

matryoshka(5);
