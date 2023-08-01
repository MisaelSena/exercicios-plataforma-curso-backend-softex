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

let listaVotacao = {
    candidatos:[
      {nome: "candidato_X", numero: 889, votos:0},
      {nome: "candidato_Y", numero: 847, votos:0},
      {nome: "candidato_Z", numero: 515, votos:0}      
    ],
    brancoENulo:[
        {nome: "branco", numero: 0, votos:0},
        {nome: "nulo", votos:0}
    ]
   };

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
                console.log("CONTAGEM:");
                for(i = 0; i < listaVotacao.candidatos.length; i++){
                    console.log(`${listaVotacao.candidatos[i].nome}: ${listaVotacao.candidatos[i].votos} Votos`);
                }
                for(i = 0; i < listaVotacao.brancoENulo.length;i++){
                    console.log(`${listaVotacao.brancoENulo[i].nome}: ${listaVotacao.brancoENulo[i].votos} Votos`);
                }
              let maisVotado = listaVotacao.candidatos.reduce(function (prev,current) {
                return prev.votos > current.votos ? prev : current;
              })
              console.log("O MAIS VOTADO FOI:");
              console.log(`${maisVotado.nome} com ${maisVotado.votos} votos!`);                                
            }
        }
    
        switch (parseInt(voto)) {
            case 889:
                listaVotacao.candidatos[0].votos++;
                verificaContinucao();        
                break;
            case 847:
                listaVotacao.candidatos[1].votos++;
                verificaContinucao();        
                break;
            case 515:
                listaVotacao.candidatos[2].votos++;
                verificaContinucao();        
                break;
                
            case 0:
                listaVotacao.brancoENulo[0].votos++;
                verificaContinucao();        
                break;
        
            default:
                listaVotacao.brancoENulo[1].votos++;
                verificaContinucao();
                break;
        }
    }

    
}
votacao();

