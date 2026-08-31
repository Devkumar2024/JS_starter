// Create a function with a private variable.
function createCounter() {
  // Private Variable 
  let count = 0;

  // Return methods that close over the 'count' variable (Closure)
  return {
    increment: function() {
      count++;
      console.log(`Count: ${count}`);
    },
    decrement: function() {
      count--;
      console.log(`Count: ${count}`);
    },
    Count: function() {
      return count;
    }
  };
}

const counter = createCounter();

counter.increment(); // Output: Count: 1
counter.increment(); // Output: Count: 2
counter.decrement(); // Output: Count: 1

// Direct access attempt
console.log(counter.count); 
console.log(counter.Count()); 