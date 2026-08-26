function wo_parameter(){
    return "Dev Kumar";
}

const n = 3;
// different way to define for loop in JS
// for(const num of n){
//     console.log(wo_parameter())
// }  only works in case of iterable stuff like array, stringb , maps , set

for(let i = 1; i<=n; i++){
    console.log(wo_parameter());
}

// function_keyword function_name (paremeter list :: Here argumenets are passed){
//    function body;

//    return value; (optional)
// }