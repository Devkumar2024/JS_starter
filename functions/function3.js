// default value in function

function fetchName(n = "Dev kumar" /* def val */){
    return n;
}

let naam = fetchName();
console.log("Name of the student is : ", naam);
console.log("When we pass cutom value in default function : ", fetchName("Sonu"));
