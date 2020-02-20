/// Operadores Rest e Spread

// REST - serve para pegar o resto das propriedades
// Em objeto:
const usuario = {
    nome: 'Diego',
    idiade: 23,
    empresa: 'Rocketseat'
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

// Em vetor
const arr = [1, 2, 3, 4];

const [ a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

// Para parâmetros de funções:
function soma(...params){
    return params.reduce( (total, next) => total + next);
}

console.log(soma(1, 3, 4));

// SPREAD - repassar as informações de um objeto/array para outro objeto/array

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [ ...arr1, ...arr2];
console.log(arr3);

// Usando para criar um novo objeto de um usuário com todas as propriedades porém mudando uma única propriedade
const usuario1 = {
    nome: 'Diego',
    idiade: 23,
};

const usuario2 = { ...usuario1, nome: 'Gabriel' };
console.log(usuario2);