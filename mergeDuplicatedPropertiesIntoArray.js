var data = [
  { type: "orange", title: "First" },
  { type: "orange", title: "Second" },
  { type: "banana", title: "Third" },
  { type: "banana", title: "Fourth" },
];

const fun = (ar) => {
  const output = ar.reduce((prev, curr) => {
    const tmp = prev.find((e) => e.type === curr.type);
    if (tmp) {
      tmp.title.push(curr.title);
    } else {
      prev.push({
        type: curr.type,
        title: [curr.title],
      });
    }

    return prev;
  }, []);
  return output;
};

console.log(fun(data));
