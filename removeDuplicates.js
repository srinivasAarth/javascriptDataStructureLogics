const list = [1, 2, 3, 4, 5, 6, 4, 3, 2, 4, 5];

const removeDuplicates = (ar) => {
  const removed = ar.filter((e, i, arr) => i === arr.indexOf(e) && e);
  console.log("by filter =>" + removed);
  //  using set Object
  const removeDuplicatesBySet = Array.from(new Set(ar));
  //  or
  const removeDuplicatesBySet1 = [...new Set(ar)];
  console.log("by set =>" + removeDuplicatesBySet1);

  //  remove values if occurence more then one time

  const removeOccarenceValues = ar.filter(
    (e, i, arr) => !ar.filter((e, i, arr) => i !== ar.indexOf(e)).includes(e)
  );
  console.log("remaining values =>" + removeOccarenceValues);
};
removeDuplicates(list);
// =========================For Object===============================

const ObjectList = [
  { name: "chary" },
  { name: "don" },
  { name: "great" },
  { name: "hello" },
  { name: "great" },
];

const removeObjectDuplicates = (ar) => {
  console.log(ar);
  const removeObjectDuplicatesFromArray = ar
    .map(JSON.stringify)
    .filter((e, i, arr) => i === arr.indexOf(e) && e)
    .map(JSON.parse);
  console.log("removedDuplicatedobject => " + removeObjectDuplicatesFromArray);
};
removeObjectDuplicates(ObjectList);
