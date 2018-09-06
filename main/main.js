function anagrams(str) {
    if (!str) {
        return [];
    }
    if (str.length === 1) {
        return [str];
    }
    const charsArray = Array.from(str);
    return unique(charsArray.reduce((result, char, index) => {
        anagrams(removeElementAndCopy(charsArray, index))
            .forEach(shortStr => result.push(char + shortStr));
        return result;
    }, []));
}

function unique(allStr) {
    return [...new Set(allStr)];
}

function removeElementAndCopy(array, index) {
    let copy = Array.from(array);
    copy.splice(index, 1);
    return copy;
}

module.exports = anagrams;