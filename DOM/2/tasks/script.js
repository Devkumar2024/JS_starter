// How to find?…

// The table with id="age-table".
// All label elements inside that table (there should be 3 of them).
// The first td in that table (with the word “Age”).
// The form with name="search".
// The first input in that form.
// The last input in that form.

let table = document.getElementById('age-table')
console.log(table);


// problem with this is get all lables of html doc, if we want for age label specific
// let allLables = document.querySelectorAll('label')
let allLables = document.querySelectorAll('#age-table label')
console.log(allLables);

// table.querySelector('td') : More cleaner, selects in that specific table only
let td = table.querySelector('td')
console.log(td);

let form = document.querySelector('form[name="search"]')
console.log(form);

// elements hai keep in mind
let fInput = document.getElementsByTagName('input')[0];
console.log(fInput);

// last input
let inputs = document.querySelectorAll('input')
console.log(inputs);
console.log(inputs[inputs.length-1]);