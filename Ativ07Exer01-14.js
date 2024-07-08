// Atividade 07 Exercício 01 - Função Atividade 01 Exercício 14

const ler = require('readline-sync');

let letra;
const vogal = ['A', 'E', 'I', 'O', 'U'];

function alfabeto() {
    letra = ler.question("Digite uma Letra: ").toUpperCase();
    verif(letra);
}

function verif() {
    if (vogal.includes(letra)) {
        console.log("A Letra - " + letra + " - é uma Vogal!");
    } else {
        console.log("A Letra - " + letra + " - é uma Consoante!");
    }
}

alfabeto();