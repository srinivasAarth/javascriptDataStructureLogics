const depthObject = {
  name: "chary",
  child: { name: "darci", child: { name: "JS | BUG" }, class: 50 },
  class: 10,
};
const getValues = (ob, tmp) => {
  for (x in ob) {
    if (typeof ob[x] === "object") {
      getValues(ob[x], tmp);
    } else {
      tmp.push(ob[x]);
    }
  }
  console.log(tmp);
};
getValues(depthObject, []);
