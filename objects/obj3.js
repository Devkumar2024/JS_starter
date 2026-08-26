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
// assigning cutom names in desctruring and usage of def values
let {
  name: Username,
  age,
  profession: Job,
  stats = 89,
  address: home,
  company: workplace,
} = gen_info;

console.log([Username, stats, gen_info.name, home]);

// nested value destructuring
let {
  // to access prfolie you need to create saprate property
  profile: job_stat,
  profile: { Exp, languages: pl, No_of_EOMs: Accolades },
} = gen_info;

console.log(job_stat);
console.log(Exp);
console.log(Accolades);
