/**
 * Форматирует число в строку с разделителем на тысячные
 * @param {String|Number} num Число
 * @param {String} separator Разделитель
 * @returns {String}
 */
export function formatNumber(num: string | number, separator = ' '): string {
    let rowNum: string | number = num.toString();
    rowNum = rowNum.split('.')[0];
    rowNum = rowNum.replace(/[^\d]/gmi, '');
    rowNum = Number(rowNum);
    rowNum = Math.round(rowNum);
    rowNum = rowNum.toString();

    if (rowNum.length > 3) {
        return Array.from(rowNum)
            .reverse()
            .map((digit, index) => (
                (index + 1) % 3 ? digit : `${separator}${digit}`
            ))
            .reverse()
            .join('')
            .trim();
    }

    return rowNum;
}

/**
 * Очищает число от примисей (пробелов)
 * @param {String | Number} число
 * @return {Number} валидное целое число
 */
export function clearNumber(value: string | number): number {
    if (typeof value === 'number') return Math.floor(value || 0);
    if (!value.length) return 0;

    return parseInt(value.replace(',', '.').replace(/[^\d-.]/g, ''), 10);
}
