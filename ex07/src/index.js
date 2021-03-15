var sum = 0;
function addThree() {
  sum += 3;
  if (typeof sum != "defined") {
    console.log("undefined", sum);
  } else {
    console.log("error");
  }
}
function addFive() {
  sum += 5;
  if (typeof sum != "defined") {
    console.log("undefined", sum);
  } else {
    console.log("error");
  }
}

addThree();
addFive();

module.exports = {
  addThree,
  addFive,
};
