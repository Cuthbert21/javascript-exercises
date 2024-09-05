const repeatString = function(string, num) {
    if (num <0 ){
        return "ERROR"
    }
        
    let concat = "";
    for (let i=0; i<num; i++) {
        concat += string
    }
    return concat 
};

// Do not edit below this line
module.exports = repeatString;
