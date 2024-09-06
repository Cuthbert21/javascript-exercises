const removeFromArray = function(reqarray, ...rest) {
    for (let i =0; i<rest.length; i++){
        for(;reqarray.includes(rest[i]); ){
        let position = reqarray.indexOf(rest[i]);
        console.log(position);
        reqarray.splice(position, 1)
        }
        }
            return reqarray
};

// Do not edit below this line
module.exports = removeFromArray;
