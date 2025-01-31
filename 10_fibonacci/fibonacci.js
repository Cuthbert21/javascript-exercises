const fibonacci = function(input) {
    iterations = Number(input);
    result = 1;
    previous = 0;
    if (iterations == 0) {
        return 0
    } else if (iterations < 0) {
        return "OOPS"
    } else {
    for (let i = 1; i < iterations; i++){
        result += previous;
        previous = result - previous;
    }
        return result
    }
};

// Do not edit below this line
module.exports = fibonacci;
