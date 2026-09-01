function func() {
  let counter = 0;

  return function () {
    if (counter < 1) {
      console.log("Hi, Dev bhai !!");
      counter++;
    } else {
      console.log("Mai call ho chuka hoon " + counter + " baar");
      counter++;
    }
  };
}

const myfunc = func();
myfunc();
myfunc();
myfunc();