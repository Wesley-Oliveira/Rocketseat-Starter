"use strict";

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}]; // Q2.1 Usando map - Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]

var arrIdades = usuarios.map(function (item) {
  return item.idade;
});
console.log(arrIdades); // Q2.2 Usando filter - Crie uma variável que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18 anos: 

var arrUsuarios = usuarios.filter(function (item) {
  if (item.idade > 18) return item;
});
console.log(arrUsuarios); // Q2.3 Usando find - Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined

var findEmpresa = usuarios.find(function (item) {
  if (item.empresa == 'Google') return item.nome;
});
console.log(findEmpresa); // Q2.4 Unindo operações Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem no máximo 50 anos:

var arrMultiplicaIdade = usuarios.map(function (item) {
  item.idade *= 2;
  return item;
});
var arrFilterMultiplicaIdade = arrMultiplicaIdade.filter(function (item) {
  if (item.idade < 50) {
    return item;
  }
});
console.log(arrFilterMultiplicaIdade);
