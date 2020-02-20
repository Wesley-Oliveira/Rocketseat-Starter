"use strict";

// Operações com Arrays
var arr = [1, 3, 4, 5, 8, 9]; // map - percorre todo o vetor e retorna um informação

var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr); //reduce, consumir todo o vetor e colocar todas a informmação em uma variável

var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum); //filtrar o array, vai retornar true ou false

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); // verificar se exister uma informação no array

var find = arr.find(function (item) {
  return item === 4;
});
console.log(find);
