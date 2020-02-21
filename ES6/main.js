//Importando uma função específica
//Para renomear a função passando funções específicas
//import { soma, sub } from './funcoes';
//import { soma as somaFunction, sub } from './funcoes';

//Importando com default e específica
//import soma, { sub } from './funcoes';

//Para importar todas as funções para uma única variável
import * as funcoes from './funcoes'
//Importando com export default
//import soma from './funcoes';

console.log(funcoes.default(1, 3)); // Para pegar a função default
//console.log(funcoes.soma(1, 2)); //Gerou um erro, ele não conseguiu encontrar a função default
console.log(funcoes.sub(1, 2));
console.log(funcoes.mult(1, 2));