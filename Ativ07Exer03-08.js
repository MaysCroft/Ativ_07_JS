// Atividade 07 Exercício 03 - Função Atividade 03 Exercício 08

const ler = require('readline-sync');

let num;
let soma = 0;

function somaNum() {
    for (let i = 0; i < 18; i++) {
        num = ler.questionFloat(`${i + 1} - Digite um Numero: `);
        soma += num;
    }
    
    if (soma > 500) {
        soma -= 100;
    }
    
    console.log("- A Soma dos Números é: " + soma);
}

somaNum();