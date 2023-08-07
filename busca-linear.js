/*
    Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar 
    um código em JavaScript para encontrar o valor 20.

    Para isso, temos que escolher entre realizar uma busca linear ou binária 
    de acordo com a que for mais adequada para essa situação.

    Codifique a solução mais eficiente para buscar o número 20 no array.
*/

//Como nossa lista é pequena e desordenada, a melhor opção é realizar uma busca linear.

let numeros = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];

const numeroBuscado = 20;

function encontrar() {
    for (i = 0; i < numeros.length; i++) {
        if(numeros[i] === numeroBuscado) {
            return i;
        }   
    }
    return -1;
    
}
const indiceNumeroBuscado = encontrar();

if(indiceNumeroBuscado !== -1){
    console.log(`O elemento ${numeroBuscado} foi enconrado no índice [${indiceNumeroBuscado}]`);
}else{
    console.log(`O elemento ${numeroBuscado} não foi enconrado!`);
}

