let firstNumber = prompt('Enter first number');
let secondNumber = prompt('Enter second number');

const notANumberValidate = ( value ) => {
    return (value === '' || isNaN(value))
}

if (notANumberValidate(firstNumber) || notANumberValidate(secondNumber)){
    console.log('Некорректный ввод!');
} 
else {
    console.log(Number(firstNumber).toString(Number(secondNumber)));
}

