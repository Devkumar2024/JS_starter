function hello(){
    console.log(`Hello`);
}
hello.prototype.baby = "cuite";
hello.prototype.xyz = "abc";
hello.prototype.walk = function(){
    console.log(`I am walking`);
};
console.log(hello.prototype.walk());