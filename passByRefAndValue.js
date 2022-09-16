const passByref = () => {
  const person = {
    age: 20,
    name: "Ben",
  };

  const peopleArray = [person, person, person];
  peopleArray[1].name = "Joe";
  console.log(peopleArray); // i will override the name through the all objects in array REASON : because all objects in an array are referening in one memory code
};
passByref();

const passByValue = () => {
  const person = {
    age: 20,
    name: "Ben",
  };

  const peopleArray = [{ ...person }, { ...person }, { ...person }];
  peopleArray[1].name = "Joe";
  console.log(peopleArray); // now this time spread operator created a new object for each time spread so every object have own memory address
};
passByValue();

const spreadOperatorOverride = () => {
  const carOne = {
    color: "blue",
    status: {
      running: true,
      passengers: 4,
      wiperFluid: "empty",
    },
    age: 5,
    miles: 50000,
    value: "8000",
  };

  const carTwo = {
    color: "green",
    status: {
      running: "yes",
      passengers: 2,
      fuelTank: "empty",
    },
    value: 9000,
  };

  const combinedCar = {
    ...carOne,
    ...carTwo,
  };

  console.log(combinedCar); // spread operator only spreads the latest depth not more the one depth
  //    NOTE : if two variables have the same name then it overrides older one with latest one
};
spreadOperatorOverride();
