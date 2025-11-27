'use strict';
let hasDriverLicense = true;
let passTest = true;

function planner() {
    console.log(`I ma leave this place soon`);
}

planner();
planner();
planner();

function bookReader(book1, book2) {
    console.log(book1, book2);
    
    const Knowledge = `Knowledge decomposed from ${book1} and ${book2}`;
    return Knowledge;
}

bookReader('The Great Gatsby', 'The Secret');
bookReader('The Great Gatsby', 'The Secret');
