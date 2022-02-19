//arrow-function.js

function add(num1, num2) {
    return num1 + num2;
}

const add1 = function add1(num1, num2) {
    return num1 + num2;
}
const add2 = function (num1, num2) {
    return num1 + num2;
}
const add3 = (num1, num2) => num1 + num2;

const sum1 = add(15, 20);
const sum2 = add1(15, 21);
const sum3 = add2(15, 22);
const sum4 = add3(15, 25);
console.log(sum1, sum2, sum3, sum4);