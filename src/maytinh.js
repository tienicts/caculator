let operator = '';
let number1 = '';
let number2 = '';
let isPressCaculate = false;
var result = document.getElementById("result");
const MAX_LENGTH_NUMBER = 12;
function printResult(num) {
    var value = (+num).toLocaleString('en');
    if (value.length < 8) {
        result.style.fontSize = '70px';
    } else {
        result.style.fontSize = '40px';
    }
    result.innerText = value;
}

function handleClickNumber(number) {
    if (isPressCaculate) {
        operator = '';
        number1 = '';
        number2 = '';
        isPressCaculate = false;
    }
    if (result.innerText == '0') {
        result.innerText = '';
    }
    if (operator == '') {
        if (number1.length < MAX_LENGTH_NUMBER) {
            number1 += number;
            printResult(number1);
        }
    } else if (number2.length < MAX_LENGTH_NUMBER) {
        number2 += number;
        printResult(number2);
    }
}
function handleClickOperator(opera) {
    operator = opera;
    isPressCaculate = false;
    number2 = '';
}
function calculate() {
    number1 = String(eval(number1 + operator + number2));
    printResult(number1);
    isPressCaculate = true;
}
function am() {
    number1 = - number1;
    printResult(number1);
}

function clearNumber() {
    result.innerText = '0';
    operator = '';
    number1 = '';
    number2 = '';
    result.style.fontSize = '60px';
}