'use strict';
import { convertStringToNumber } from "./convertStringToNumber.js";

const financeForm = document.querySelector('.finance__form');
const financeAmount = document.querySelector('.finance__amount');
const financeReport = document.querySelector('.finance__report');
const report = document.querySelector('.report');
const reportClose = document.querySelector('.report__close');

let amount = 0;

financeAmount.textContent = amount;

financeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const typeOperation = e.submitter.dataset.typeOperation;
    
    const changeAmount = Math.abs(convertStringToNumber(financeForm.amount.value));

    if (typeOperation === 'income') {
        amount += changeAmount;
    }
    if (typeOperation === 'expenses') {
        amount -= changeAmount;
    }

    financeAmount.textContent = `${amount.toLocaleString()} ₽`;

})

financeReport.addEventListener('click', (e) => {
    report.classList.add('report__open');
})

reportClose.addEventListener('click', (e) => {
    report.classList.remove('report__open');
})
