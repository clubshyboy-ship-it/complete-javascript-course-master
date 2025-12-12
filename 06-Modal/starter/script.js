'use strict';

const modal = document.querySelectorAll('.modal');
const overlay =document.querySelectorAll('.overlay');
const btnClose =document.querySelectorAll('.close-modal');
const btnOpen =document.querySelectorAll('.show-modal');

console.log(btnOpen);

for (let i=0;i<btnOpen.length;i++)
btnOpen[i].addEventListener('click', function() {
    modal[i].classList.remove('hidden');
    overlay[i].classList.remove('hidden');
});
