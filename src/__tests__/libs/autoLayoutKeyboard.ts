import { autoLayoutKeyboard } from 'libs/utils';

describe('autoLayoutKeyboard', () => {
    it('Правильное выходное значение', () => {
        expect(autoLayoutKeyboard('Ghbdtn')).toBe('Привет');
        expect(autoLayoutKeyboard('Ghbdtn!@#')).toBe('Привет!@#');
        expect(autoLayoutKeyboard('`;')).toBe('ёж');
        expect(autoLayoutKeyboard('~;')).toBe('Ёж');
        expect(autoLayoutKeyboard('>kbz')).toBe('Юлия');
        expect(autoLayoutKeyboard('[hbpfyntvf')).toBe('хризантема');
        expect(autoLayoutKeyboard('c]tpl')).toBe('съезд');
        expect(autoLayoutKeyboard('c]tpl123')).toBe('съезд123');
        expect(autoLayoutKeyboard('423')).toBe('423');

        expect(autoLayoutKeyboard('Привет', 'en')).toBe('Ghbdtn');
        expect(autoLayoutKeyboard('Привет!@#', 'en')).toBe('Ghbdtn!@#');
        expect(autoLayoutKeyboard('ёж', 'en')).toBe('`;');
        expect(autoLayoutKeyboard('юлия', 'en')).toBe('.kbz');
        expect(autoLayoutKeyboard('хризантема', 'en')).toBe('[hbpfyntvf');
        expect(autoLayoutKeyboard('съезд', 'en')).toBe('c]tpl');

        expect(autoLayoutKeyboard('Привет')).toBe('Привет');
        expect(autoLayoutKeyboard('Привет!@#')).toBe('Привет!@#');
        expect(autoLayoutKeyboard('ёж')).toBe('ёж');
        expect(autoLayoutKeyboard('юлия')).toBe('юлия');
        expect(autoLayoutKeyboard('хризантема')).toBe('хризантема');
        expect(autoLayoutKeyboard('съезд')).toBe('съезд');

        expect(autoLayoutKeyboard('Ghbdtn', 'en')).toBe('Ghbdtn');
        expect(autoLayoutKeyboard('Ghbdtn!@#', 'en')).toBe('Ghbdtn!@#');
        expect(autoLayoutKeyboard('`;', 'en')).toBe('`;');
        expect(autoLayoutKeyboard('.kbz', 'en')).toBe('.kbz');
        expect(autoLayoutKeyboard('[hbpfyntvf', 'en')).toBe('[hbpfyntvf');
        expect(autoLayoutKeyboard('c]tpl', 'en')).toBe('c]tpl');
    });
});
