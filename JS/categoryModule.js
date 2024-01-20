//categoryModule.js
let count = 4;

export function add_category() {
    const newCategoryValue = document.getElementsByClassName("form-input")[0].value;
    if (newCategoryValue) {
        const dropdown = document.getElementsByClassName("available-categories")[0];
        const newCategoryOption = document.createElement("option");
        newCategoryOption.innerHTML = `<option>${newCategoryValue}</option>`;
        count++;
        expensePerCategory[count] = 0;
        const newCategorySpan = document.createElement("span");
        newCategorySpan.innerHTML = `<span>${newCategoryValue}<span class="sum"> - ${expensePerCategory[count]} ${currency} spent</span></span>`;
        dropdown.appendChild(newCategorySpan);
        document.getElementsByClassName("add-new-expense")[0].style.display = "none";
    }
}

export function addCategoryPage() {
    if (document.getElementsByClassName("add-new-expense")[0].style.display === "block") {
        document.getElementsByClassName("add-new-expense")[0].style.display = "none";
    } else {
        document.getElementsByClassName("add-new-expense")[0].style.display = "block";
    }
}
