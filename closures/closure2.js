function hello(x){
    const a = "Hi";
    const b = "Mr.";
    return function(){
        console.log(a,b,x);
    }
}

const p1 = new hello("Dev");
p1();

