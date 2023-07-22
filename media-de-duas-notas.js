/* No hipertexto anterior, temos um exemplo de um fluxograma que realiza o 
 * cálculo da média de duas notas de um aluno. O fluxograma solicita duas notas 
 * que serão somadas, e logo em seguida a média dessas notas é calculada. 
 * Dessa forma o resultado da média quando é maior ou igual a 7 o aluno está APROVADO, 
 * quando menor que 7 o aluno está REPROVADO.
 */

const prompt = require("prompt-sync")();


var nota1 = parseFloat(prompt("Informe a Nota 1: "));
var nota2 = parseFloat(prompt("Informe a Nota 2: "));

var media = (nota1 + nota2)/2;

if(media>=7){
  console.log(`Aluno Aprovado com Média: ${media}`);
}else{
  console.log(`Aluno Reprovado com Média: ${media}`);
}