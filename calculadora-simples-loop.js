/*
    Faça, utilizando o Google Blockly, uma função calculadora que os números e as operações serão feitas pelo usuário. 
    O código deve ficar rodando infinitamente até que o usuário escolha a opção de sair. No início, o programa mostrará 
    a seguinte lista de operações:
    1: Soma
    2: Subtração
    3: Multiplicação
    4: Divisão
    0: Sair

    Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, o sistema deve mostrar a 
    mensagem “Essa opção não existe” e voltar ao menu de opções.

    Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo valor, um de cada. Depois precisa 
    executar a operação e mostrar o resultado na tela. Quando o usuário escolher a opção “Sair”, o sistema irá parar. 

    É necessário que o sistema mostre as opções sempre que finalizar uma operação e mostrar o resultado.
*/

const prompt = require('prompt-sync')();


function calculadora() {

        let resultado = 0;
        let operacao = prompt("Informe a operação (1: Soma 2: Subtração 3: Multiplicação 4: Divisão 0: Sair): ");
        let numero1 = "";
        let numero2 = "";

        
        if (operacao != 0) {

            switch (operacao) {
                case "1":
                    console.log("Adição Selecionada!");
                    numero1 = parseFloat(prompt("Informe o 1º número: "));    
                    numero2 = parseFloat(prompt("Informe o 2º número: "));
                    resultado = numero1 + numero2;
                    console.log(`O resultado da soma é: ${resultado}`);
                    calculadora();
                    break;    
                    
                case "2":
                    console.log("Subtração Selecionada!");
                    numero1 = parseFloat(prompt("Informe o 1º número: "));    
                    numero2 = parseFloat(prompt("Informe o 2º número: "));
                    resultado = numero1 - numero2;
                    console.log(`O resultado da subtração é: ${resultado}`);
                    calculadora();
                    break;         
                   
                case "3":
                    console.log("Multiplicação Selecionada!");
                    numero1 = parseFloat(prompt("Informe o 1º número: "));    
                    numero2 = parseFloat(prompt("Informe o 2º número: "));
                    resultado = numero1 * numero2;
                    console.log(`O resultado da Multiplicação é: ${resultado}`);
                    calculadora();
                    break;         
                    
                case "4":
                    console.log("Divisão Selecionada!");
                    numero1 = parseFloat(prompt("Informe o 1º número: "));    
                    numero2 = parseFloat(prompt("Informe o 2º número: "));
                    resultado = numero1 / numero2;
                    console.log(`O resultado da Divisão é: ${resultado}`);
                    calculadora();
                    break; 
    
                case "0":
                    console.log("Saindo!");
                    break;        
                    
                default:
                    console.log(`Valores incorretos! O resultado é: ${resultado}`);
                    calculadora();
                    break;             
             }
            
        } else {
            console.log("Saindo!");
        }
        

          
}
calculadora();




