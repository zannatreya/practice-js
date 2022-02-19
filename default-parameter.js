//default-parameter.js

function add(num1, num2 = 12) {
    const total = num1 + num2;
    return total;
}
// const result = add(15, 15);
// console.log(result);

function fullName(first, last = 'chy') {
    const name = first + ' ' + last;
    return name;
}
const result = fullName('zannat', 'reya');
console.log(result);