// Copying an array

const array1 = ['zannatul', 'binta', 'bahar'];
const array2 = ['nafisa', ...array1, 'bahar'];
// const array3 = [...array1];
console.log(array2);

const number1 = [12, 34, 56, 32, 98];
// const number2 = Math.max(...number1);
const number2 = Math.min(...number1);
// console.log(number2);


//Inserting the elements of one array into another
let baked_desserts = ['cake', 'cookie', 'donut'];
let desserts = ['icecream', 'flan', 'frozen yoghurt', ...baked_desserts];
console.log(desserts);
//Appending baked_desserts after flan
let desserts2 = ['icecream', 'flan', ...baked_desserts, 'frozen yoghurt'];
console.log(desserts2);

//

const arr1 = ['zannatul'];
const arr2 = [...arr1, 'binta'];
const arr3 = [...arr2, 'bahar'];
console.log(arr2, arr3);

//array to arguments

function multiply(number1, number2, number3) {
    console.log(number1 * number2 * number3);
}
let numbers = [1, 2, 3];
multiply(...numbers);