const fibonacci = function(num) {
    if(! Number.isInteger(num))
        num = parseInt(num);

    if(num < 0)
        return 'OOPS';
    if(num == 0)
        return 0;
    let prev = 0, curr = 1;
    for(let i = 2; i <= num; i++){
        const sum = prev + curr;
        prev = curr;
        curr = sum;
    }
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
