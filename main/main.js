function anagrams(str) {
    if (!str) {
        return [];
    }
    if (str.length === 1) {
        return [str];
    }
    const charsArray = Array.from(str);
    let allStr = charsArray.reduce((result, char, index) => {
        anagrams(removeChar(str, index))
            .forEach(shortStr => result.push(char + shortStr));
        return result;
    }, []);
    return unique(allStr);
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