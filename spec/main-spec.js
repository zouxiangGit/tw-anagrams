const anagrams = require('../main/main');

describe('main()', () => {
    it('should return empty when str is empty', () => {
        expect(anagrams('')).toEqual([]);
    });

    it('should return the character when str is only one char', () => {
        expect(anagrams('a')).toEqual(['a']);
    });
});