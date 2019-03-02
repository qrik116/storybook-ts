import { formatNumber, clearNumber } from 'libs/utils';

describe('Utils', () => {
    it('formatNumber', () => {
        expect(formatNumber('', ' ')).toBe('0');
        expect(formatNumber('875 050', ' ')).toBe('875 050');
        expect(formatNumber(875050, ' ')).toBe('875 050');
        expect(formatNumber(' 875 05 ', ' ')).toBe('87 505');
        expect(formatNumber('1012460.0000000001', ' ')).toBe('1 012 460');
    });

    it('clearNumber', () => {
        expect(clearNumber('875 050')).toBe(875050);
        expect(clearNumber('-875 050')).toBe(-875050);
        expect(clearNumber('     875    050 ')).toBe(875050);
        expect(clearNumber('     875   050 .321')).toBe(875050);
        expect(clearNumber('     -875   050 .32   ')).toBe(-875050);
        expect(clearNumber(' asd  -875   050 .32   ')).toBe(-875050);
        expect(clearNumber(' asd  -875   050 ,32 , 12 ')).toBe(-875050);
        expect(clearNumber(' asd  -875   050 ,32 , 12  dsa  ')).toBe(-875050);
        expect(clearNumber(875050)).toBe(875050);
        expect(clearNumber(-875050)).toBe(-875050);
        expect(clearNumber(875050.123)).toBe(875050);
        expect(clearNumber('')).toBe(0);
        expect(clearNumber(NaN)).toBe(0);
    });
});
