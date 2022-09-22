const input = [
  { date: "01-01-2022", count: 1 },
  { date: "02-01-2022", count: 2 },
  { date: "05-01-2022", count: 9 },
];

const fun = (ar) => {
  var t = 0;
  const get = ar.map((e, i) => {
    t = t + e.count;
    const Data = { date: e.date, count: e.count, sum: t };
    return Data;
  });
  return get;
};
console.log(fun(input));
