// uiModule.js
export function addExpensePage() {
    if (document.getElementsByClassName("add-new-expense")[0].style.display === "block") {
        document.getElementsByClassName("add-new-expense")[0].style.display = "none";
    } else {
        document.getElementsByClassName("add-new-expense")[0].style.display = "block";
    }
}
