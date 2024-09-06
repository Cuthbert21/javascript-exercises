const reverseString = function(input) {
    let arr = Array.from(input);
    let output = "";
    for(let i=arr.length-1; i>=0 ; i--){
        output += arr[i]
    }

    return output
};

// Do not edit below this line
module.exports = reverseString;
