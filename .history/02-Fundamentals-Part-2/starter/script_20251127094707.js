'use strict';
/*
let hasDriverLicense = true;
let passTest = true;

function planner() {
    console.log(`I ma leave this place soon`);
}

planner();
planner();
planner();

//calling
function bookReader(book1, book2) {
    //running
    console.log(book1, book2);
    const Knowledge = `Knowledge decomposed from ${book1} and ${book2}`;
    return Knowledge;
}

const wisdom = bookReader('The Great Gatsby', 'The Secret');//we calling the function
console.log(wisdom);
console.log(bookReader('The Great Gatsby', 'The Secret'));//唯一的区别是没有把值赋给变量
*/

function myAttitude(c,d) {
    const a = `for the person called ${c},I think he/she is a ${d} person`;
    return a;
}

console.log(myAttitude('you','kind'));
console.log(myAttitude('me', 'brave'));
///**Keep your code dry(Dont Repeat Yourself) */