const list = [1, 2, 3, 2, 1, 4, 6, 7, 5];

const findAccorance = (ar) => {
  const obj = {};
  for (x of ar) {
    obj[x] = ~~obj[x] + 1;
  }
  console.log(obj);
};
findAccorance(list);

// for objects

const objectList = [
  { name: "don" },
  { name: "great" },
  { name: "don" },
  { name: "great" },
  { name: "darci" },
  { name: "darci" },
  { name: "don" },
];

const findAccoranceForObjects = (ar) => {
  const convertStringType = ar.map(JSON.stringify);
  const objectObj = {};
  for (x of convertStringType) {
    objectObj[x] = ~~objectObj[x] + 1;
  }
  console.log(objectObj);
};
findAccoranceForObjects(objectList);
