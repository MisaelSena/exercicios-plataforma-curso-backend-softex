/*  Faça um código, utilizando o Google Blockly, que execute a contagem regressiva 
    de uma bomba, informando o número de segundos para explodir. Ele deverá mostrar a 
    mensagem “iniciando contagem regressiva”, os segundos passados e, no final, a 
    mensagem “BUM!”.
*/

function contagemRegressiva() {
  console.log("Iniciando contagem regressiva");

  for (tempo = 5; tempo > 0; tempo--) {
    console.log(tempo);
  }
  console.log("BUM!");
}
contagemRegressiva();
