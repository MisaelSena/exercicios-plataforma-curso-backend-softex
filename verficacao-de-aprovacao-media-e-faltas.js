/* Desenvolva, um programa que utiliza 
 * o nome de um aluno, duas notas e a quantidade de faltas que ele teve. 
 * Conclua se o aluno está aprovado ou reprovado de acordo com as 
 * especificações: 
 * - Se a média do aluno for menor que sete, o sistema deve informar o nome do aluno e que ele está reprovado;
 * - Se o aluno possuir mais de três faltas, o sistema deve informar o nome do aluno e que ele está reprovado;
 * Se a média do aluno for maior ou igual a sete, o sistema deve informar o nome do aluno e que ele está aprovado.
 * No sistema, todos os valores devem estar armazenados em variáveis.
 */

var nome = "Misael Sena"
var nota1 = 2;
var nota2 = 9;
var faltas = 4;
var media = (nota1 + nota2)/2;

if(media<7){
    console.log(`Aluno Reprovado com Média: ${media}`);
}else if(faltas>3){  
    console.log(`Aluno Reprovado com Média ${media} porém obteve ${faltas} faltas!`);
}else{
    console.log(`Aluno Aprovado com Média: ${media}`);
}