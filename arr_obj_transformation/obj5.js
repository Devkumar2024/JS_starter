const employees = [
  { id: 1, name: "Dev", department: "IT", salary: 40000 },
  { id: 2, name: "Aman", department: "HR", salary: 35000 },
  { id: 3, name: "Riya", department: "IT", salary: 50000 },
  { id: 4, name: "Karan", department: "Sales", salary: 45000 },
  { id: 5, name: "Neha", department: "HR", salary: 42000 },
];

/*
Create an object containing the total salary paid by each department.
*/

let arr4 = employees.reduce((acc, curr) => {
  if (acc[curr.department]) {
    acc[curr.department] += curr.salary;
  } else {
    acc[curr.department] = curr.salary;
  }
  return acc;
}, {});
console.log(arr4);

// Create an object containing the average salary of each department.
let temp = employees.reduce((acc, curr) => {
  if (acc[curr.department]) {
    acc[curr.department].total += curr.salary;
    acc[curr.department].count += 1;
  } else {
    acc[curr.department] = { total: curr.salary, count: 1 };
  }
  return acc;
}, {});
console.log(temp);

let arr5 = {};
for (let dept in temp) {
  // Storing row in data
  let data = temp[dept];
  arr5[dept] = data.total / data.count;
}
console.log(arr5);


// Create an object where each department contains the name of its highest-paid employee.

let tempu = employees.reduce((acc, curr) => {
  if (acc[curr.department]) {
    acc[curr.department].push([curr.name, curr.salary]);
  } else {
    acc[curr.department] = [[curr.name, curr.salary]];
  }
  return acc;
}, {})

console.log(tempu)
console.log()
console.log()
let final = {};
for (let dept in tempu) {
  let data = tempu[dept];
  let maxSalary = 0;
  let maxName = "";
  for (let i = 0; i < data.length; i++){
    if (data[i][1] > maxSalary) {
      maxSalary = data[i][1];
      maxName = data[i][0];
    }
  }
  final[dept] = maxName;
}

console.log(final)
console.log();

let key = employees.reduce((acc, curr) => {
  //  += : add in existing value, = assign
  acc[curr.id] = curr.name
  return acc 

}, {})
console.log(key)




