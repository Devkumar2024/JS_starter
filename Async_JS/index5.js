// setTimeout will execute only after execution of while loop, there is no gurantee that it will be executed just after the timeout is over, it will check browser whether it is free?, call stack emptty? then only it will resume.

setTimeout(() => {
  console.log("Work done");
}, 10);


let i = 0;
while (i < 1000) {
  i++;
}
