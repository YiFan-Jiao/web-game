'use strict'

const inputNum = document.querySelector('.big-num');
let changeNum = document.querySelector('.change-num');
const tryBtn = document.querySelector('.try-buttom');
const flexResult = document.querySelector('.point-out');

const playAgain = document.querySelector('.play-again');

let oneNum = Math.floor(Math.random() * (50 - 1)) + 1;
changeNum.innerText = 0;
console.log(oneNum);

tryBtn.addEventListener('click', () => {
    changeNum.innerText++;
    if (isNaN(inputNum.value.trim()) || inputNum.value.trim() === '') {
        flexResult.innerText = 'Enter the correct value'
    } else { 
        if (inputNum.value.trim() < oneNum) {
            flexResult.innerText = 'This is smaller'
        } else if(inputNum.value.trim() > oneNum) {
            flexResult.innerText = 'This is bigger'
        } else {
            flexResult.innerText = 'You guessed right.'
        }
    } 
});

playAgain.addEventListener('click', () => {
    changeNum.innerText = 0;
    oneNum = Math.floor(Math.random() * (50 - 1)) + 1;
    console.log(oneNum);
});