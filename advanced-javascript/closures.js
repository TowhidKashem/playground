// Closures can be used to avoid polluting the global scope

const factorial = () => {
  const cache = {}; // in local scope

  return (num) => {
    let result = num;
    for (let i = num - 1; i > 0; i--) {
      // Referencing local `cache` var
      if (i in cache) {
        result *= cache[i];
        break;
      }
      result *= i;
    }
    cache[num] = result;
    return result;
  };
};

const factorialClosure = factorial();

console.log(factorialClosure(5));
console.log(factorialClosure(6)); // the previous value of "5" is still stored in `cache` and is accessible on the next call
