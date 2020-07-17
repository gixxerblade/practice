// given these two objects write a function that merges them similar to how the spread operator would work. (do not use spread)
const a = {
  a: {
    b: "hello",
    nested: {
      c: "typo",
    },
  },
  d: "nerds",
};
const b = {
  a: {
    b: "hello",
    nested: {
      c: "world",
    },
  },
  d: ["nerds"],
  e: "what",
};
/** should return when merging b with a
  {
    "a": {
      "b": "hello",
      "nested": {
        "c": "world"
      }
    },
    "d": [
      "nerds"
    ],
    "e": "what"
  } 
  */

const mergeObjects = (obj1, obj2) => {
  for (prop in obj2) {
    if (typeof obj1[prop] != "object") {
      obj1[prop] = obj2[prop];
    } else if (typeof obj2[prop] == "object") {
      obj1[prop] = mergeObjects(obj1[prop], obj2[prop]);
    }
  }
  return obj1;
};

console.log(mergeObjects(a, b));
