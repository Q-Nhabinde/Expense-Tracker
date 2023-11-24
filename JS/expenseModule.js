// expenseModule.js
export const expensePerCategory = [0, 0, 0, 0, 0, 0];

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
