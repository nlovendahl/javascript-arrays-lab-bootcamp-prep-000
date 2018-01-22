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
  var moreKittens = [kittens, ...name];
  return moreKittens;
}

function prependKitten(name) {
  var evenMoreKittens = [...name, kittens];
  return evenMoreKittens;
}

function removeLastKitten(name) {
  var lessKittens = kittens.pop(name);
  return lessKittens;
}

function removeFirstKitten(name) {
  var evenLessKittens = kittens.shift(name);
  return evenLessKittens;
}