import { abbreviate } from "./StringUtils"

describe('abbreviate', () => {
    it('short string stay unchanged', () => {
        const text = 'short string';
        expect(abbreviate(text, text.length)).toEqual(text);
    });

    it('long string will be cutted', () => {
        const text = 'long string';
        const expected = 'long...';
        expect(abbreviate(text, expected.length)).toEqual(expected);
    });

    it('empty string stay unchanged', () => {
        const text = '';
        expect(abbreviate(text, 1)).toEqual(text);
    });

    it('target length less as 3', () => {
        const text = 'text';
        const expected = 't';
        expect(abbreviate(text, 1)).toEqual(expected);
    });

    it('target length less as 1', () => {
        const text = 'text';
        const expected = '';
        expect(abbreviate(text, -1)).toEqual(expected);
    });
})