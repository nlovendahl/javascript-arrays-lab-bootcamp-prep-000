const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
  return kittens;
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
  return kittens;
}

function appendKitten(name) {
  var moreKittens = kittens.push(name);
  return moreKittens;
}

function prependKitten(name) {
  evenMoreKittens = kittens.unshift(name);
  return evenMoreKittens;
}

function removeLastKitten(name) {
  lessKittens = kittens.pop(name);
  return lessKittens;
}

function removeFirstKitten(name) {
  evenLessKittens = kittens.shift(name);
  return evenLessKittens;
}