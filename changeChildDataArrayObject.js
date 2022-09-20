const original = [
  {
    adresse: { street: "Streetone", plz: "55555", ort: "Hamburg" },
    mitglieder: [
      {
        zugestimmt: true,
        nummer: "345",
        nachname: "Meier",
        vorname: "Peter",
        geburtsDatum: "1980-01-01",
      },
      {
        zugestimmt: true,
        nummer: "435",
        nachname: "Haushalt",
        vorname: "Anderer",
        geburtsDatum: "1980-01-01",
      },
    ],
  },
  {
    adresse: { street: "Streettwo", plz: "34444", ort: "Hamburg" },
    mitglieder: [
      {
        zugestimmt: true,
        nummer: "345",
        nachname: "Muster",
        vorname: "Maria",
        geburtsDatum: "1980-01-01",
      },
      {
        zugestimmt: true,
        nummer: "345",
        nachname: "Muster",
        vorname: "Maria",
        geburtsDatum: "1980-01-01",
      },
    ],
  },
];
const twoDArrayShift = (ar) => {
  output = ar.flatMap(({ adresse, mitglieder }) =>
    mitglieder.map((mitg) => delete mitg.nummer && { ...mitg, ...adresse })
  );

  console.log(output);
};
twoDArrayShift(original);
