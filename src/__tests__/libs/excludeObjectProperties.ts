import { excludeObjectProperties } from 'libs/utils';

describe('excludeObjectProperties', () => {
    it('Правильное выходное значение', () => {
        expect(excludeObjectProperties({ a: 1, b: 2, c: 3, d: 4 }, ['a', 'b'])).toEqual({ c: 3, d: 4 });
    });
});
