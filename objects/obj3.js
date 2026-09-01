//  Object Destructuring
let gen_info = {
  name: "jhon doe",
  age: 36,
  profession: "dot net programmer",
  status: "married",
  address: "Kingsfield UK",
  company: "Tower capital LLC",
  profile: {
    Exp: 14,
    languages: 8,
    No_of_EOMs: 45,
  },
};

// usage in function
// { name, age } = {} , to avoid crash in cases of when passes without arguements. undefined is shown as output
function displayUser({ name: n, age: a } = gen_info) {
  console.log(n); // "jhon doe"
  console.log(a); // 36
}
displayUser(gen_info); 

// assigning custom names in desctruring and usage of def values
let {
  name: Username,
  age,
  profession: Job,
  stats = 89,
  address: home,
  company: workplace,
} = gen_info;

console.log([Username, stats, gen_info.name, home] );

// nested value destructuring
let {
  // to access prfolie you need to create saprate property
  profile: job_stat,
  profile: { Exp, languages: pl, No_of_EOMs: Accolades },
} = gen_info;

console.log(job_stat);
console.log(Exp);
console.log(Accolades);

let user = {
  name: "Dev",
  skills: ["JavaScript", "HTML", "CSS"],
  address: {
    city: "Ludhiana",
  },
};

console.log("Skills : " + user.skills);

// Array of objects
let users = [
  {
    name: "Dev",
    age: 23,
  },
  {
    name: "Aman",
    age: 24,
  },
  {
    name: "Rahul",
    age: 22,
  },
];
console.log(users[2].age);


/*
Given:
{
  firstName: "Dev",
  lastName: "Kumar",
  age: 23
}

transform it into:

{
  fullName: "Dev Kumar",
  age: 23
}
*/
let obj = {
    firstName: "Dev",
    lastName: "Kumar",
    age: 23
}

let { firstName, lastName, ...rest } = obj
let new_obj = { fullName: firstName +" " + lastName, ...rest };
console.log(new_obj);