function randomRangeNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (minNumber + maxNumber));
}
console.log(randomRangeNumber(0, 20));

module.exports = randomRangeNumber;
