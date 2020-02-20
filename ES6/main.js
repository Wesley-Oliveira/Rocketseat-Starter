// Operações com Arrays

const arr = [1, 3, 4, 5, 8, 9];

// map - percorre todo o vetor e retorna um informação
const newArr = arr.map(function(item, index) {
    return item + index;
});

console.log(newArr);

//reduce, consumir todo o vetor e colocar todas a informmação em uma variável
const sum = arr.reduce(function(total, next) {
    return total + next;
});

console.log(sum);

//filtrar o array, vai retornar true ou false
const filter = arr.filter(function(item){
    return item % 2 === 0;
});

console.log(filter);

// verificar se exister uma informação no array
const find = arr.find(function(item){
    return item === 4;
});

console.log(find);