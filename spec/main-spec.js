const anagrams = require('../main/main');

describe('main()', () => {
    it('should return empty when str is empty', () => {
        expect(anagrams('')).toEqual([]);
    });

    it('should return the character when str is only one character', () => {
        expect(anagrams('a')).toEqual(['a']);
    });

    it('should return tow str when str is two character', () => {
        expect(anagrams('ab')).toEqual(['ab','ba']);
    });
});