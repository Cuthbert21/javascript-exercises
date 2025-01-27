const palindromes = function (input) {
    removed = input.toLowerCase().replace(/[!"#$%&'() *+,-./:;<=>?@[\]^_`{|}~]/g, '');
    arr = removed.split('')
    reverse = arr.toReversed();
    console.log(arr, reverse)
    return arr.length === reverse.length && arr.every((value, index) => value === reverse[index]);
};

// Do not edit below this line
module.exports = palindromes;
