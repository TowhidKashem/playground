// Generics
function getFirst<ValueT>(arr: ValueT[]): ValueT {
  return arr[0];
}

getFirst([1, 2, 3]); // ValueT = number
getFirst(['a', 'b', 'c']); // ValueT = string
getFirst([1, 'a', false]); // ValueT = number | string | boolean

// Enforcing constraints
function getLast<ValueT extends string | number>(arr: ValueT[]): ValueT {
  return arr[arr.length - 1];
}

getLast([1, 2, 3, 'a', 'b', 'c']); // Good
getLast(['a', 'b', 3, false]); // Bad (ValueT must be a string or number)
