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
// =====================================================================
const arr = [
  { valid_days: ["0"], timeslots: [{ from_time: "09:00", to_time: "12:00" }] },
  { valid_days: ["1"], timeslots: [{ from_time: "09:00", to_time: "12:00" }] },
  {
    valid_days: ["2"],
    timeslots: [
      { from_time: "09:00", to_time: "12:00" },
      { from_time: "13:00", to_time: "15:00" },
    ],
  },
  {
    valid_days: ["3"],
    timeslots: [
      { from_time: "09:00", to_time: "12:00" },
      { from_time: "13:00", to_time: "15:00" },
    ],
  },
];

const fun1 = (ar) => {
  const output = ar.reduce((prev, curr) => {
    const tmp = prev.find(
      (e) => JSON.stringify(e.timeslots) == JSON.stringify(curr.timeslots)
    );
    if (tmp) {
      tmp.valid_days.push(...curr.valid_days);
    } else {
      prev.push({
        timeslots: curr.timeslots,
        valid_days: [...curr.valid_days],
      });
    }
    return prev;
  }, []);
  return output;
};
console.log(fun1(arr));
