//template-string.js

const multiLine = `I am Reya.
I want to be a web developer.
I try my best to achieve my goal.`;
// console.log(multiLine);

const count = 5;
const name = ['reya', 'ibrar', 'sadid', 'nafisa'];
const new1 = `<h3 class ="friend-name">friend-${count}</h3>`;
const new2 = `<h3 class ="friend-name">friend-${name.length}</h3>`;
// console.log(new1);
// console.log(new2);

const first = 'nubaied';
const last = 'ibrar';
const fullName = `my son name is: ${first} ${last}.He lives in dhaka.His age is ${name.length}.has money ${count * 20}. `;
console.log(fullName);

