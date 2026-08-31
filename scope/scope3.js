// lexical scoping
// scope is determined by where code is written not where function is called
let marks = 110;
function big_boss() {
  //inner scope can access the outer scope but outer scope can not access the inner space
  {
    let marks = 67;
    {
      // picks closest marks
      console.log(marks);
    }
    console.log(marks);
  }

  // This can not access marks as it is out of lexical scope. this will pick global marks
  (function () {
    // picks global as inner not accessible
    console.log(marks);
  })();
}
big_boss();
