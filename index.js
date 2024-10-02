const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah"];

function findMatching(drivers, name) {
  return drivers.filter(
    (driver) => driver.toLowerCase() === name.toLowerCase()
  );
}

console.log(findMatching(drivers, "Bobby"));

function fuzzyMatch(drivers, letter) {
  return drivers.filter((driver) =>
    driver.toLowerCase().startsWith(letter.toLowerCase())
  );
}
console.log(findMatching(drivers, "Sa"));

const driversObject = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];

function matchName(driversObject, name) {
  return driversObject.filter(
    (driver) => driver.name.toLowerCase() === name.toLowerCase()
  );
}

console.log(matchName(driversObject, "Bobby"));
