/**
 * Автоматическая смена раскладки
 * @param str исходная строка
 * @param direction направление
 *  - ru: en -> ru;
 *  - en: ru -> en;
 * @return преобразованная строка
 */
function autoLayoutKeyboard(str: string, direction: 'ru' | 'en' = 'ru'): string {
    const replacer = [
        ['q', 'й'], ['w', 'ц'], ['e', 'у'], ['r', 'к'], ['t', 'е'], ['y', 'н'], ['u', 'г'],
        ['i', 'ш'], ['o', 'щ'], ['p', 'з'], ['[', 'х'], [']', 'ъ'], ['a', 'ф'], ['s', 'ы'],
        ['d', 'в'], ['f', 'а'], ['g', 'п'], ['h', 'р'], ['j', 'о'], ['k', 'л'], ['l', 'д'],
        [';', 'ж'], ["'", 'э'], ['z', 'я'], ['x', 'ч'], ['c', 'с'], ['v', 'м'], ['b', 'и'],
        ['n', 'т'], ['m', 'ь'], [',', 'б'], ['.', 'ю'], ['/', '.'], ['`', 'ё'], ['~', 'Ё'],
        ['<', 'Б'], ['>', 'Ю']
    ];

    if (direction === 'ru') {
        return str.replace(/[A-z/,.;\'\]\[\`\~\<\>]/g, (x) => {
            // tslint:disable-next-line
            for (let i = 0; i < replacer.length; i++) {
                const item = replacer[i];
                const index = item.indexOf(x.toLowerCase());

                if (~index) {
                    return x === x.toLowerCase() ? replacer[i][1] : replacer[i][1].toUpperCase();
                }
            }

            return '';
        });
    }

    return str.replace(/[А-яё/,.;\'\]\[]/g, (x) => {
        // tslint:disable-next-line
        for (let i = 0; i < replacer.length; i++) {
            const item = replacer[i];
            const index = item.indexOf(x.toLowerCase());

            if (~index) {
                return x === x.toLowerCase() ? replacer[i][0] : replacer[i][0].toUpperCase();
            }
        }

        return '';
    });
}

export default autoLayoutKeyboard;
