const notANumberValidate = ( value ) => {
    return (value === '' || isNaN(value))
}

while (true) {

    let firstNumber = prompt('Enter first number');
    if (notANumberValidate(firstNumber)) {
        console.log('Некорректный ввод!');
        break;
    }

    let secondNumber = prompt('Enter second number');
    if (notANumberValidate(secondNumber)) {
        console.log('Некорректный ввод!');
        break;
    } 

    console.log(`Ответ: ${Number(firstNumber)+Number(secondNumber)} , ${Number(firstNumber) / Number(secondNumber)}`);
    break;
}
