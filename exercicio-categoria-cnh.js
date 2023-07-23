/*  Desenvolva um código, que utilize as seguintes características de um veículo:
    - Quantidade de rodas;
    - Peso bruto em quilogramas;
    - Quantidade de pessoas no veículo.

    Com essas informações, o programa mostrará qual é a melhor categoria de habilitação para o veículo informado a partir das condições:
    A: Veículos com duas ou três rodas;
    B: Veículos com quatro rodas, que acomodam até oito pessoas e seu peso é de até 3500 kg;
    C: Veículos com quatro rodas ou mais e com peso entre 3500 e 6000 kg;
    D: Veículos com quatro rodas ou mais e que acomodam mais de oito pessoas;
    E: Veículos com quatro rodas ou mais e com mais de 6000 kg.
*/

let qtdRodas = 4;
let pesoVeiculo = 6001;
let capacidadePessoasVeiculo = 9;

if(qtdRodas<=3){
    console.log("A: Veículos com duas ou três rodas");
}else if(qtdRodas >= 4 && capacidadePessoasVeiculo <= 8 && pesoVeiculo <= 3500){
    console.log("B: Veículos com quatro rodas, que acomodam até oito pessoas e seu peso é de até 3500 kg");
}else if(qtdRodas >= 4 && capacidadePessoasVeiculo <= 8 && pesoVeiculo > 3500 && pesoVeiculo <= 6000){
    console.log("C: Veículos com quatro rodas ou mais e com peso entre 3500 e 6000 kg");
}else if(qtdRodas >= 4 && capacidadePessoasVeiculo > 8 && pesoVeiculo > 3500 && pesoVeiculo <= 6000){
    console.log("D: Veículos com quatro rodas ou mais e que acomodam mais de oito pessoas");
}else if(qtdRodas >= 4 && pesoVeiculo > 6000){
    console.log("E: Veículos com quatro rodas ou mais e com mais de 6000 kg");
}
