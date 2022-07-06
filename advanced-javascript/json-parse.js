// you can store non serializable objects like a map via json parse/stringify

function replacer(key, value) {
  if (value instanceof Map) {
    return {
      dataType: 'Map',
      value: Array.from(value.entries())
    };
  }
  return value;
}

function reviver(key, value) {
  if (typeof value === 'object' && value !== null) {
    if (value.dataType === 'Map') {
      return new Map(value.value);
    }
  }
  return value;
}

// use the custom "replacer" function when stringifying
JSON.stringify(value, replacer);

// use the custom "reviver" function when parsing
JSON.parse(value, reviver);
