function anagrams(str) {
    if (!str) {
        return [];
    }
    if (str.length === 1) {
        return [str];
    }
    return [str, reverseString(str)];
}

function reverseString(str) {
    return str.split('').reverse().join('');
}
module.exports = anagrams;