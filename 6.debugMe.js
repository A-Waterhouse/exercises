const { check, runTest, skipTest } = require("../../test-api/index.js");

// Fix the function below to pass the test!

function addSnack(snack) {
  const snacks = [
    "Waggon Wheel",
    "Doritos: Chilly Heat Wave",
    "Haribos",
    "Monster Munch",
  ];
  //console.log(snacks)
  snacks.push(snack);
 // console.log(snacks)
  return snacks;
}

// Please do not change code below this line

runTest("Get addSnack to return an array with updated snacks", function () {
  check(addSnack("Pistachios")).isEqualTo([
    "Waggon Wheel",
    "Doritos: Chilly Heat Wave",
    "Haribos",
    "Monster Munch",
    "Pistachios",
  ]);
});
