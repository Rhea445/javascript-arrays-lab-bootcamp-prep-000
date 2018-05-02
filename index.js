const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
}

function appendKitten(name){
  var newarr = [...kittens, name]
  return newarr
}

function prependKitten(name){
  var newarr = [name, ...kittens]
  return newarr
}

function removeLastKitten(name){
  var newarr = kittens.slice()
  return newarr
}