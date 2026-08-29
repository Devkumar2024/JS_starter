// id_generator

class EID_generator {
  constructor(name, age, dob, dept, role, salary) {
    this.name = name;
    this.age = age;
    this.dob = dob;
    this.dept = dept;
    this.role = role;
    this.salary = salary;
  }
  generate() {
    console.log(`
Name = ${this.name}
Age = ${this.age} 
Date of birth = ${this.dob} 
Department = ${this.dept}
Job role = ${this.role}  
Salary = ${this.salary}`);
  }
}

let Dev = new EID_generator("Dev kumar", 24, 2003, "IT", "Jr. SDE", 10000);

Dev.generate();
