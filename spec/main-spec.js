const anagrams = require('../main/main');

describe('main()', () => {
    it('should return empty when str is empty', () => {
        expect(anagrams('')).toEqual([]);
    });
});