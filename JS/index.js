let expense_per_category = [0, 0, 0, 0, 0, 0];
let currency = "INR"; // Set the default currency
let count = 4;

update_sum();

function update_sum() {
    var sum = document.querySelectorAll(".sum");
    for (var i = 0; i < sum.length; i++) {
        sum[i].innerHTML = " - " + expense_per_category[i] + " " + currency + " spent";
    }
}

function add_expense() {
    var amount = document.getElementsByClassName("form-input")[0].value;
    var date = document.getElementsByClassName("form-input")[2].value;
    var action = document.getElementsByClassName("form-input")[3].value;

    var category = document.getElementsByID("category").selectedIndex;
    var selectedCategory = document.getElementsById("category").options[category].value;

    var currency = document.getElementsByClassName("currency").selectedIndex;
    var selectedCurrency = document.getElementsById("currency").options[currencyIndex].value; // Use getElementById for the currency dropdown

    if (amount && date && category && action) {
        alert("Successfully added expenses!");

        var table = document.getElementsByTagName("table")[0];
        var new_row = document.createElement("tr");
        new_row.innerHTML = '<tr style="border-bottom: 1px solid white;">' +
            '<td>' + amount + '</td>' +
            '<td>' + selectedCategory + '</td>' +
            '<td>' + date + '</td>' +
            '<td>' + selectedCurrency + '</td>' +
            '<td>' + action + '</td>' +
            '</tr>';
        table.appendChild(new_row);

        expense_per_category[parseInt(category)] += parseInt(amount);
        update_sum();
        console.log(count);
        document.getElementsByClassName("add-new-expense")[0].style.display = "none";
    } else { 
        alert("Please enter all details!");
    }
}

function add_new_category() {
    var new_category_value = document.getElementsByClassName("form-input")[5].value;
    if (new_category_value) {
        var dropdown = document.getElementsByClassName("available-categories")[0];
        var available_category= document.getElementsByClassName("available-categories")[0];
        var new_category_option = document.createElement("option");
        new_category_option.innerHTML = '<option>' + new_category_value + '</option>';
        count++;

        expense_per_category[count] = 0;
        
        var new_category_span = document.createElement("span");
        new_category_span.innerHTML = '<span>' + new_category_value + '<span class="sum"> - ' + expense_per_category[count] + currency + ' spent</span></span>';
        dropdown.appendChild(new_category_span);
        document.getElementsByClassName("add-category")[0].style.display = "none";
    }
}

function add_category_page() {
    if (document.getElementsByClassName("add-category")[0].style.display == "block") {
        document.getElementsByClassName("add-category")[0].style.display = "none";
    } else {
        document.getElementsByClassName("add-category")[0].style.display = "block";
    }
}

function add_expense_page() {
    if (document.getElementsByClassName("add-new-expense")[0].style.display == "block") {
        document.getElementsByClassName("add-new-expense")[0].style.display = "none";
    } else {
        document.getElementsByClassName("add-new-expense")[0].style.display = "block";
    }
} 