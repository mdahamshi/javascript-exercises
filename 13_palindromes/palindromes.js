const palindromes = function (str) {
    let cleaned = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let reversed = cleaned.split('').reverse().join('');
    return reversed == cleaned;
}
// Do not edit below this line
module.exports = palindromes;
