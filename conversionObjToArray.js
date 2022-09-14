// OBJECT TO ARRAY BY KEYS VALUES AND ENTRIES
const obj = { name: "chary", age: 12, class: "10th", branch: "mech" };

// get keys by Object.keys() in the form of array

const keys = Object.keys(obj);
console.log(keys); // ["name", "age", "class", "branch"]

// get values by using the Object.values() fun method

const values = Object.values(obj);

console.log(values); // ["chary", 12, "10th", "mech"]

// get both [keys ,values] at a time by unsing the Object.entries()
const keyValues = Object.entries(obj);
console.log(keyValues);
// output [["name", "chary"], ["age", 12], ["class", "10th"], ["branch", "mech"]]

// again convert from keyValues to object by using Object.fromEntries()
const convertEntriesToObject = Object.fromEntries(keyValues);
console.log(convertEntriesToObject);

// CONVERT FROM ARRAY TO OBJECT

// we can convert array to object using Object.assign() method
const arr = [1, 2, 3, 4, 5, 6];
const convertObject = Object.assign({}, arr);

console.log(convertObject);

const convertWithreducer = arr.reduce((acc, curr, index) => {
  return { ["key" + index]: curr, ...acc };
}, {});
console.log(convertWithreducer);

// for more information https://bobbyhadz.com/blog/javascript-convert-array-to-object
