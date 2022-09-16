const passByref = () => {
  const person = {
    age: 20,
    name: "Ben",
  };

  const peopleArray = [person, person, person];
  peopleArray[1].name = "Joe";
  console.log(peopleArray); // i will override the name through the all objects in array REASON : because all objects in an array are referening in one memory code
};
// passByref();

const passByValue = () => {
  const person = {
    age: 20,
    name: "Ben",
  };

  const peopleArray = [{ ...person }, { ...person }, { ...person }];
  peopleArray[1].name = "Joe";
  console.log(peopleArray);
};
passByValue();
