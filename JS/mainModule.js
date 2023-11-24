// mainModule.js
import { addExpensePage } from './uiModule.js';
import { addNewCategory, addCategoryPage } from './categoryModule.js';
import { addExpense, updateSum, expensePerCategory } from './expenseModule.js';

let currency = "INR";

document.getElementById("currency").addEventListener("change", function () {
    currency = this.value;
    updateSum(currency);
});

// Event listeners
document.querySelector('.buttons').addEventListener('click', addExpensePage);
document.querySelector('.add-category .buttons').addEventListener('click', addNewCategory);
document.querySelector('.category .buttons').addEventListener('click', addCategoryPage);
document.querySelector('.add-new-expense .buttons').addEventListener('click', addExpense);
