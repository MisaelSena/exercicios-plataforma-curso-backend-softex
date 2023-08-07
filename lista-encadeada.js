/*
    Crie uma lista encadeada em que cada elemento representa uma pessoa.

    Ela precisa conter informações como nome, idade e referência ao filho dela.
*/

class Pessoa {
    constructor(nome, idade, filho){
        this.nome = nome;
        this.idade = idade;
        this.filho = filho;
    }
}

let pessoas = [];

pessoas.push(new Pessoa("José", 30, true));
pessoas.push(new Pessoa("Maria", 20, false));
pessoas.push(new Pessoa("João", 45, true));

console.log(pessoas);







