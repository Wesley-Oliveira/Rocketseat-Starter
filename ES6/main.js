// não pode ter o valor reatribuido
const a = 1; // o valor vai continuar 1 mesmo que eu tente atribuir um novo valor, porém ainda é possível mutar um const

//mutação, trabalha com o mesmo formato do objeto porém altera valores dentro do objeto
const usuario = { nome: 'Diego'};
usuario.nome = 'Cleiton';
console.log(usuario);

//Variaveis de escopo
function teste(x) {
    //Só é visível dentro do escopo, no caso da função
    let y = 2;

    if (x > 5) {
        let y = 4;
        console.log(x, y); // printa 4 pq o y deste escopo é 4
    }
    console.log(x, y); // printa 2 pq o y deste escopo é 2
}
teste(10);