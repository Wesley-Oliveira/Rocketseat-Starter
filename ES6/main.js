//Valores padrão

function soma1(a = 3, b = 6) {
    return a + b;
}

//Usando a sintaxe de arrow function
const soma2 = (a = 3, b = 6) => a + b;

console.log(soma1(1));
console.log(soma2());