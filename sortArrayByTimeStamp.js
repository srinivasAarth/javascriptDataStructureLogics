const a = [
  {
    record_id: "cef4d093-0ced-4d0d-b9f6-90c2e2687bbe",
    status_date_activity: { "On Rent": 1663892940412 },
  },
  {
    record_id: "2ff8212f-5ec9-4453-b1f3-91840a3fb152",
    status_date_activity: { "On Rent": 1662021991000 },
  },
  {
    record_id: "c8c11f97-5eda-4f9b-a6a0-5a3f259c85b6",
    status_date_activity: { "On Rent": 1663826452195 },
  },
  {
    record_id: "c8c11f97-5eda-4f9b-a6a0-5a3f259c85b6",
    status_date_activity: { "On Rent": 1663826452195 },
  },
];

const fun = (ar) => {
  const getSort = ar.sort(
    (a, b) =>
      new Date(a.status_date_activity["On Rent"]) -
      new Date(b.status_date_activity["On Rent"])
  );
  //   console.log(getSort)
  const hetMap = getSort.map((e, i) => {
    var modifyItem;
    for (x in e.status_date_activity) {
      modifyItem = x.split(" ").join("_");
      if (x.split(" ").length > 1) {
        e.status_date_activity[modifyItem] = e.status_date_activity[x];
        delete e.status_date_activity[x];
      }
    }
    const d = new Date(e.status_date_activity.On_Rent);
    const month = d.toLocaleString("en-US", {
      month: "long",
    });
    const date = d.getDate();
    const getPerfectFormat = `${date} ${month}`;
    const Data = {
      [getPerfectFormat]: [
        {
          record_id: e.record_id,
          status_date_activity: e.status_date_activity,
        },
      ],
    };
    return Data;
  });

  hetMap.forEach((d, i) => {
    for (x in d) {
      hetMap[i][x] = d[x];
    }
  });
  return hetMap;
};
console.log(fun(a));
