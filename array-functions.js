const mapFunc = (array, callback) => {
    const arrCopy = [...array];

    for(let i = 0; i < arrCopy.length; i++) {
        arrCopy[i] = callback(arrCopy[i])
    }
    return arrCopy;

};

const filterFunc = (array, callback) => {
    let newArr = [];
    for(let item of array) {
        if(callback(item)) newArr = [...newArr, item]
    }
    return newArr;
};

const findIndexFunc = (array, callback) => {
    let result = -1;
    for(let i = 0; i < array.length; i++){
        if(callback(array[i])) {
            result = i;
            break;
        }
    }
    return result;
}

const reduceFunc = (array, callback, initialVal) => {   
    let accumulator;
    let i;
    if(initialVal) {
        accumulator = initialVal;
        i = 0;
    } else {
        accumulator = array[0];
        i = 1;
    }
    for(i ; i < array.length; i++) {
        accumulator = callback(accumulator, array[i])
    }
    return accumulator;
}
const everyFunc = (array, callback) => {
    let bool = true;
    for(let item of array) {
        if(!callback(item)) bool = false;
    }
    return bool;
}
const forEachFunc = (array, callback) => {
    for(let i=0; i < array.length; i++ ) {
        callback(array[i], i)
    }
    // return undefined;
}


module.exports = {
    mapFunc,
    filterFunc,
    findIndexFunc,
    reduceFunc,
    everyFunc,
    forEachFunc,
}