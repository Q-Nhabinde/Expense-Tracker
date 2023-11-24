let expense_per_category =[0,0,0,0,0,0]
var count = 4;

update_sum();

function update_sum(){
    var sum = document.querySelectorAll(".sum");
    for (var i=0; i<sum.length;i++){
        sum[i].innerHTML = " - "+expense_per_category[i]+" "+ currency +".spent";
    }
}
function add_expense(){
    var amount = document.getElementByClassName("form-input")[0].value;
    var date = document.getElementByClassName("form-input")[2].value;
    var action = document.getElementByClassName("form-input")[3].value;
    var category = document.getElementByClassName("form-input")[1].value;
    var selected = document.getElementByClassName("currency").value;

if (amount && date && category && action){
    alert("Successfully added expenses!");
    var table = document.getElementsByTagName ("table")[0];
    var new_row = document.createElement("tr");
    new_row.innerHTML = '<tr style = "border-bottom: 1px solid white;" >' +
    '<td>' + amount + '</td>'+
    '<td>' + selected + '</td>'+
    '<td>' + date + '</td>' +
    '<td>' + action + '</td>' +
    '</tr>';
    table.appendChild(new_row);

    expense_per_category[parseInt(category)] += parseInt(amount);
        update_sum()
        console.log(count)
        document.getElementByClassName("add-new-expense")[0].getElementByClassName.display="none";
}
else{
    alert ("please enter all details!");
}}

function add_new_category (){
    var new_category_value = document.getElementsByClassName("new-category")[0].value;
    if (new_category_value){
        var dropdown = document.getElementsByClassName("available-categories")[0];
        var new_category_option = document.createElement("option");
        new_category_option.innerHTML = '<option>${new_category_value}</option>';
        count++
        expense_per_category[count]=0;
        var new_category_span = document.createElement("span");
        new_category_span.InnerHtml = '<span>' + new_category_value + '<span class ="sum">' - expense_per_category[count] + currency + 'spent</span></span>'
        dropdown.appendChild(new_category_span);
        document.getElementByClassName("add-category")[0].style.display = "none";
    }
}

function add_category_page(){
    if(document.getElementByClassName("add-category")[0].style.display =="block"){
        document.getElementByClassName ("add-category")[0].style.display = "none";
    } 
    else{
        document.getElementsByClassName("add-category")[0].style.display ="block";
    }
}

function add_expense_page(){
    if(document.getElementByClassName("add-new-expense")[0].style.display =="block"){
        document.getElementByClassName ("add-new-expense")[0].style.display = "none";
    } 
    else{
        document.getElementsByClassName("add-new-expense")[0].style.display ="block";
    }
}
