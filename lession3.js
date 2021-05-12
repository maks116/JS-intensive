Array.prototype.myFilter = function(callback, obj) {
    const result = [];
    let newObj = obj === undefined ? {} : obj;
    newObj.callback = callback;

    for (var i = 0; i < array.length; i++) {
        if (newObj.callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
};

function createDebounceFunction (callback, timer) {
    let i = 0;
    let myTimer;
    return function newFunc() {
        let j = i;
        i ++;
        if (i > j) {
            clearTimeout(myTimer);
            myTimer = setTimeout(callback, timer);
        }
    }
}
