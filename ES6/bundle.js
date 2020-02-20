"use strict";

// arrow functions -- Funções anônimas
var arr = [1, 3, 4, 5, 8, 9]; //Várias formas de utilizar

var newArr1 = arr.map(function (item) {
  return item * 2;
});
var newArr2 = arr.map(function (item, index) {
  return item * index;
});
var newArr3 = arr.map(function (item) {
  return item * 2;
}); //Para retornar objeto, precisa adicionar os parênteses antes das chaves do objeto

var teste = function teste() {
  return {
    nome: 'teste'
  };
};
