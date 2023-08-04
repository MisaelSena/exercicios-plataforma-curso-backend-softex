/*
    Você deve criar três listas em JavaScript:

    1. para guardar os nomes de dez pessoas;
    2. para guardar as suas idades;
    3. para guardar as suas cores favoritas.

    Em seguida, imprima essas listas. Depois, faça algumas modificações, 
    alterando uma cor e uma idade. Ao terminar, imprima novamente todas as 
    informações das três listas.
*/

let nomes = [
  "Marilene",
  "Manoel",
  "Andreza",
  "Misael",
  "Abel",
  "Elisson",
  "Elivelton",
  "Dirlando",
  "Jonatas",
  "Leandro",
];
let idades = [70, 73, 29, 32, 26, 22, 28, 30, 31, 33];
let cores = [
  "Roxo",
  "Laranja",
  "Preto",
  "Branco",
  "Rosa",
  "Cinza",
  "Vermelho",
  "Azul",
  "Verde",
  "Amarelo",
];

for (i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

for (i = 0; i < idades.length; i++) {
  console.log(idades[i]);
}

for (i = 0; i < cores.length; i++) {
  console.log(cores[i]);
}

idades[2]++;
cores[3] = "Verde";

for (i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

for (i = 0; i < idades.length; i++) {
  console.log(idades[i]);
}

for (i = 0; i < cores.length; i++) {
  console.log(cores[i]);
}
