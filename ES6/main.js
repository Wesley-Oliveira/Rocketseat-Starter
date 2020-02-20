// arrow functions -- Funções anônimas
const arr = [1, 3, 4, 5, 8, 9];

//Várias formas de utilizar
const newArr1 = arr.map( item => {
    return item * 2;
});

const newArr2 = arr.map( (item, index) => {
    return item * index;
});

const newArr3 = arr.map(item => item * 2);

//Para retornar objeto, precisa adicionar os parênteses antes das chaves do objeto
const teste = () => ({ nome: 'teste' });