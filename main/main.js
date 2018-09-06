function anagrams(str) {
    if (!str) {
        return [];
    }
    if (str.length === 1) {
        return [str];
    }
    return unique(Array.from(str).reduce((result, char, index) =>
            result.concat(anagrams(removeChar(str, index))
                .map(shortStr => char + shortStr))
        , []));
}

function unique(allStr) {
    return [...new Set(allStr)];
}

function removeChar(string, index) {
    let charArray = Array.from(string);
    charArray.splice(index, 1);
    return charArray.join('');
}

module.exports = anagrams;