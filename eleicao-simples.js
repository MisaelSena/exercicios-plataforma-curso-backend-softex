/*
    Desenvolva um código que simule uma eleição com três candidatos.
    - candidato_X => 889
    - candidato_Y => 847
    - candidato_Z => 515
    - branco => 0

    O código deve perguntar se deseja finalizar a votação depois do voto. 
    Caso o número do voto não corresponda a nenhum candidato ou seja branco, 
    ele deve ser tratado como nulo. Se for inserido um texto ao invés de número,
    o código deve retornar uma mensagem para votar novamente.

    Quando a votação for finalizada, o código deverá mostrar o vencedor, 
    aquele com o maior número de votos e, também, a quantidade de votos de 
    cada candidato, os brancos e nulos.
*/ 

const prompt = require('prompt-sync')();

let candidato_X_889 = 0;
let candidato_Y_847 = 0;
let candidato_Z_515 = 0;
let branco = 0;
let nulo = 0;

function votacao() {
    let voto = parseInt(prompt("Informe seu voto: "));

    if (isNaN(voto)) {
        console.log("O valor inserido deve ser numérico!");
        votacao();
    } else {
        function verificaContinucao() {
            let continuacao = prompt("Deseja continuar a votação?(S/N): ");
    
            if (continuacao.toLocaleUpperCase() == "S") {
                votacao();
            } else {
                console.log("Votação Encerrada!");
                console.log("RESULTADO:");
                console.log(`candidato_X_889: ${candidato_X_889} Votos`);
                console.log(`candidato_Y_847: ${candidato_Y_847} Votos`);
                console.log(`candidato_Z_515: ${candidato_Z_515} Votos`);
                console.log(`branco: ${branco} Votos`);
                console.log(`nulo: ${nulo} Votos`);                
            }
        }
    
        switch (parseInt(voto)) {
            case 889:
                candidato_X_889++;
                verificaContinucao();        
                break;
            case 847:
                candidato_Y_847++;
                verificaContinucao();        
                break;
            case 515:
                candidato_Z_515++;
                verificaContinucao();        
                break;
                
            case 0:
                branco++;
                verificaContinucao();        
                break;
        
            default:
                nulo++;
                verificaContinucao();
                break;
        }
    }

    
}
votacao();

