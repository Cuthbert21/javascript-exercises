const findTheOldest = function(arr) {
    let fixedDate = [];
    new Date().getFullYear()
    arr.forEach((item) => {
    if (item.yearOfDeath === undefined) {
    item.yearOfDeath = new Date().getFullYear()
    fixedDate.push(item);
    } else {
        fixedDate.push(item)
    }
    });
    
    let result = fixedDate.map(year => (
    {
        name : year.name,
        age: year.yearOfDeath - year.yearOfBirth
    }
    ));
    result.sort((a, b) => a.age - b.age )
    return result[result.length - 1]
};

// Do not edit below this line
module.exports = findTheOldest;
