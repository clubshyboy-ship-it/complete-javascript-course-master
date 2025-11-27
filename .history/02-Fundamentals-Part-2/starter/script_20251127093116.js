'use strict';
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
    console.log(book1, book2);
    //running
    const Knowledge = `Knowledge decomposed from ${book1} and ${book2}`;
    return Knowledge;
}

const wisdom = bookReader('The Great Gatsby', 'The Secret');
console.log(wisdom);