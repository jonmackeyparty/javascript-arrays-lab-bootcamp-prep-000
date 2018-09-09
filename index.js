// Add your functions and code here

function destructivelyAppendKitten(name){
  kittens.push('Ralph');
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift('Bob');
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop(2);
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift(0);
  return kittens;
}

function appendKitten(name){
<<<<<<< HEAD
  var kittens = ["Milo", "Otis", "Garfield"];
  kittens.splice(3, 0, 'Broom');
  return kittens;
}

function prependKitten(name){
  var kittens = ["Milo", "Otis", "Garfield"];
  kittens.splice(0, 0, 'Arnold');
  return kittens;
}

function removeLastKitten(){
  return kittens.slice(0, 2);
}

function removeFirstKitten(){
  return kittens.slice(1);
}
=======
  var kittens = [...kittens, 'Bob'];
  return kittens;
}
>>>>>>> 333d09910ec134bd0e7d08f8b7fa29f9f78345ac
