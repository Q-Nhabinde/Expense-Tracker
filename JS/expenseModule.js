// expenseModule.js
export function addExpense() {
    const amount = document.querySelector(".form-input[name='amount']").value;
    const date = document.querySelector(".form-input[name='date']").value;
    const action = document.querySelector(".form-input[name='Action']").value;
    const category = document.querySelector(".form-input[name='Category']").value;
    const selectedCurrency = document.getElementById("currency").value;

    if (amount && date && category && action) {
        alert("Successfully added expenses!");

        const table = document.querySelector(".expense-table");
        const newRow = document.createElement("tr");

        const tdAmount = document.createElement("td");
        tdAmount.textContent = amount;

        const tdCurrency = document.createElement("td");
        tdCurrency.textContent = selectedCurrency;

        const tdDate = document.createElement("td");
        tdDate.textContent = date;

        const tdAction = document.createElement("td");
        tdAction.textContent = action;

        newRow.appendChild(tdAmount);
        newRow.appendChild(tdCurrency);
        newRow.appendChild(tdDate);
        newRow.appendChild(tdAction);

        table.appendChild(newRow);

        expensePerCategory[parseInt(category)] += parseInt(amount);
        updateSum(selectedCurrency);

        // Log or do something with 'count' if needed
        console.log("Expense count:", expensePerCategory[parseInt(category)]);

        document.querySelector(".add-new-expense").style.display = "none";
    } else {
        alert("Please enter all details!");
    }
}

/*/export const expensePerCategory = [0, 0, 0, 0, 0, 0];

export function updateSum(currency) {
    const sumElements = document.querySelectorAll(".sum");
    for (let i = 0; i < sumElements.length; i++) {
        sumElements[i].innerHTML = ` - ${expensePerCategory[i]} ${currency}.spent`;
    }
}

export function addExpense() {
    const amount = document.getElementsByClassName("form-input")[0].value;
    const date = document.getElementsByClassName("form-input")[2].value;
    const action = document.getElementsByClassName("form-input")[3].value;
    const category = document.getElementsByClassName("form-input")[1].value;
    const selectedCurrency = document.getElementById("currency").value;

    if (amount && date && category && action) {
        alert("Successfully added expenses!");

        const table = document.getElementsByTagName("table")[0];
        const newRow = document.createElement("tr");
        newRow.innerHTML = `<tr style="border-bottom: 1px solid white;">
            <td>${amount}</td>
            <td>${selectedCurrency}</td>
            <td>${date}</td>
            <td>${action}</td>
        </tr>`;
        table.appendChild(newRow);

        expensePerCategory[parseInt(category)] += parseInt(amount);
        updateSum(selectedCurrency);
        console.log(count);
        document.getElementsByClassName("add-new-expense")[0].style.display = "none";
    } else {
        alert("Please enter all details!");
    }
} 
*/