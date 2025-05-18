const sumAll = function(a,b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)
     || a < 0 || b < 0) {
        return "ERROR";
    }

    let min = Math.min(a,b);
    let max = Math.max(a,b);
    return ((max - min + 1) * (min + max)) / 2; //sequence sum
};

// Do not edit below this line
module.exports = sumAll;
