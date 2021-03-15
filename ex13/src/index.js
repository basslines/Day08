function randomRangeNumber(minNumber, maxNumber) {
  var random = Math.floor(Math.random() * (30 - 1 + 1)) + 1;
  return random;
}
console.log(randomRangeNumber());

module.exports = randomRangeNumber;
