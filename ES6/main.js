// Desestruturação de objetos

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    },
};

// Normalmente
// const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade;

// Com desestruturação
const { nome, idade, endereco: { cidade } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

// Normalmente
// function mostraNome(usuario) {
//     console.log(usuario.nome);
// }

// Com desestruturação
function mostraNome( { nome, idade }) {
    console.log(nome, idade);
}

mostraNome(usuario);