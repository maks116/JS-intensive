const makeObjectDeepCopy = obj => {
    const result = Array.isArray(obj)? [] : {};
        Object.keys(obj).forEach(key => {
            const value = obj[key];
            if (typeof value === 'object') {
                result[key] = makeObjectDeepCopy(value);
            }
            else {
                result[key] = value;
            }
        } 
    )
    return result;
}

const selectFromInterval = ( numbersArray, startInterval, stopInterval ) => {
    if (!Array.isArray(numbersArray) || typeof startInterval !== 'number' || typeof stopInterval !== 'number') {
        throw new Error('Ошибка');
    }
    const result = [];
    let min = startInterval;
    let max = stopInterval;
    if (startInterval > stopInterval) {
        min = stopInterval;
        max = startInterval;
    }
    for (let i =0; i< numbersArray.length; i++) {
        if (typeof numbersArray[i] !== 'number') {
            throw new Error('Ошибка');
        }

        if (numbersArray[i] >= min && numbersArray[i]<= max) {
            result.push(numbersArray[i]);
        }
        
    }
    return result;
}


let myIterable = {
    from: 1,
    to: 5
  };
  
myIterable[Symbol.iterator] = function() {
    if (this.to < this.from || typeof this.to !== 'number' || typeof this.from !== 'number'|| !this.to || !this.from) {
          throw new Error('Ощибка');
    }

    return {
        current: this.from,
        last: this.to,
        next() {
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        }
    };
  };