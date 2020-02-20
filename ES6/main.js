class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }

    // Método estático não vai enxergar o restante da classe, serve mais pra passar uma informação para ele te devolver outra: ex abaixo na class Matematica
    static addTodo() {
        this.todos.push('Novo todo');
        console.log(this.todos);
    }
}

class Matematica {
    static soma(a, b){
        return a + b;
    }
}

console.log(Matematica.soma(1,3));
// List.addTodo(); //Vai gerar erro pois o addTodo não enxerga o resto da classe por ser static


//Herança
class TodoList extends List{
    constructor() {
        // Chamar o constructor da classe pai
        super();
        this.usuario = 'Diego';
    }
    
    mostraUsuario() {
        console.log(this.usuario);
    }
}

var MinhaLista = new TodoList(); //Instanciando a classe

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();