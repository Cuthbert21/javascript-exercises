const sumAll = function(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        return "ERROR";
    } else if (num1<0 || num2 < 0) {
        return "ERROR";
    } else if(!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }
    let smallerNum=Math.min(num1,num2);
    let biggerNum=Math.max(num1,num2);
for (let i = smallerNum+1; i <= biggerNum; i++){
    smallerNum += i;
    // console.log(smallerNum)
}
        return smallerNum;
};

// Do not edit below this line
module.exports = sumAll;
