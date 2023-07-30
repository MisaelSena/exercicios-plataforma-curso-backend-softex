/*
    Desenvolva um programa que recebe do usuário nome completo e ano de nascimento 
    que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o 
    nome do usuário e a idade que completou, ou completará, no ano atual (2022).

    Caso o usuário não digite um número ou apareça um inválido no campo do ano, o 
    sistema informará o erro e continuará perguntando até que um valor correto seja 
    preenchido.
    */
    const prompt = require('prompt-sync')();

    const nome = prompt("Nome Completo: ");  
    
    function calculoIdade(){

        const anoAtualExercicio = 2022;
        let anoNascimento = prompt("Ano de Nascimento: ");
        let idade = anoAtualExercicio - anoNascimento;       

            if (anoNascimento < 1922 || anoNascimento > 2021) {
                console.log("O ano digitado deve estar entre 1922 e 2021!");
                calculoIdade();
            } else {
                console.log(`Nome: ${nome} Idade: ${idade}`);
            }
    }
    calculoIdade();

