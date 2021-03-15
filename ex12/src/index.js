function randomInteger() {
  var random = Math.floor(Math.random() * 30);
  return random;
}

console.log(randomInteger());
module.exports = randomInteger;
