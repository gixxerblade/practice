const testObj1 = {
  name: "testObj1",
  age: 5,
  weight: 100,
  children: ["Bill", "Bob", "Beth"],
};
const testObj4 = {
  name: "testObj1",
  age: 5,
  weight: 100,
  children: ["Bill", "Bob", "Beth"],
};

const testObj2 = {
  age: 45,
  name: "ShoesMom",
  weight: 800,
  children: ["Shoe"],
};

const testObj3 = {
  name: "Wentworth",
  weight: 30,
  children: [],
};

//Get length of object
Object.size = (obj) => {
  let size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};

// Check if item is object
let isObject = (object) => {
  return object != null && typeof object === "object";
};

let objSame = (obj1, obj2) => {
  //Check length of object
  if (Object.size(obj1) !== Object.size(obj2))
    return `${obj1.name} is not equal to ${obj2.name}`;
  // Check if objects are same reference
  if (Object.is(obj1, obj2)) return `${obj1.name} is equal to ${obj2.name}`;
  // Recursively checks all items in both objects if they are the same
  for (const key of Object.keys(obj1)) {
    const val1 = obj1[key];
    const val2 = obj2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      (areObjects && !objSame(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return `${obj1.name} is not equal to ${obj2.name}`;
    }
  }
  return `${obj1.name} is equal to ${obj2.name}`;
};
console.log(objSame(testObj1, testObj4)); //true
console.log(objSame(testObj1, testObj2)); //false
console.log(objSame(testObj1, testObj3)); //false
console.log(objSame(testObj1, testObj1)); //true same reference
