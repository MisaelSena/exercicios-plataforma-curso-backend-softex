/*
    Faça uma função calculadora de dois números com três parâmetros: 
    os dois primeiros serão os números da operação e o terceiro será a 
    entrada que definirá a operação a ser executada. Considera a seguinte 
    definição:
    1. Soma
    2. Subtração
    3. Multiplicação
    4. Divisão

    Caso seja inserido um número de operação que não exista, o resultado 
    deverá ser 0.
*/

const prompt = require('prompt-sync')();


function calculadora() {

    let operacao = prompt("Informe a operação (+,-,* ou /). Se desejar sair digite(x): ");    
    let resultado = 0;
    const sair = "x";

    while(operacao !== sair){        
        let numero1 = parseFloat(prompt("Informe o 1º número: "));    
        let numero2 = parseFloat(prompt("Informe o 2º número: "));
        switch (operacao) {
            case "+":
                resultado = numero1 + numero2;
                console.log(`O resultado da soma é: ${resultado}`);
                calculadora();    
                
            case "-":
                resultado = numero1 - numero2;
                console.log(`O resultado da subtração é: ${resultado}`);
                calculadora();        
               
            case "*":
                resultado = numero1 * numero2;
                console.log(`O resultado da Multiplicação é: ${resultado}`);
                calculadora();        
                
            case "/":
                resultado = numero1 / numero2;
                console.log(`O resultado da Divisão é: ${resultado}`);
                calculadora();        
                
            default:
                console.log(`Valores incorretos! O resultado é: ${resultado}`);
                calculadora();            
         }

    }

    
    
}
calculadora();




