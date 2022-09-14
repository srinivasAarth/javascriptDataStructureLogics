const items = [
  { item_id: 1, stock_on_hand: 400, item: { id: 1, code: "ITEM 1" } },
  { item_id: 2, stock_on_hand: 150, item: { id: 2, code: "ITEM 2" } },
];

const func = (ar) => {
  const temp = [];
  ar.map((e, i) => {
    for (let [x, ind] of Object.entries(e)) {
      if (typeof ind == "object") {
        temp.push(Object.assign({}, ar[ar.indexOf(e)][x]));
        delete ar[ar.indexOf(e)][x];
      }
    }
  });
  const obj = { ...ar, temp };
  return obj;
};
console.log(func(items)); // output

// {
//   '0': { item_id: 1, stock_on_hand: 400 },
//   '1': { item_id: 2, stock_on_hand: 150 },
//   temp: [
//             { id: 1, code: 'ITEM 1' },
//             { id: 2, code: 'ITEM 2' }
//           ]
// }
