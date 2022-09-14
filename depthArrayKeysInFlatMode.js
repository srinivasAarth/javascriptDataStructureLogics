const obj = {
  test1: {
    test12: "val1",
    test13: {
      test131: "val1",
      test132: "val2",
    },
  },
  test2: "val2",
};

const mapToKeys = ([key, value]) => {
  if (Object.prototype.toString.call(value) === "[object Object]") {
    return [key, ...Object.entries(value).flatMap(mapToKeys)];
  }
  return [key];
};
const keys = Object.entries(obj).map(mapToKeys);

console.log(keys);
