function concatStrings (value, separator) {
    let trigger = true;
    separator = typeof separator === 'string'? separator : '';
    let result = typeof value === 'string'? value + separator : '';
    function f (nextValue) {
        if (typeof nextValue === 'string' && trigger ) {
            result += nextValue + separator;
        }
        else {
            trigger = false;
        }
        return f; 
    } 
    f.toString = () =>  result;
    f.valueOf = () => result;

    return f;
}
