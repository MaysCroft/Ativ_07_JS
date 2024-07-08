// Atividade 07 Exercício 03 - Função Atividade 03 Exercício 10

const ler = require('readline-sync');

let num;
let somaneg = 0;

function negativo() {
    while (true) {

        num = ler.questionInt("- Digite um Numero Inteiro ou 0 para SAIR: ");
        
        if (num === 0) {
            break; 
        }
    
        if (num < 0) {
            somaneg += num; 
        }
    }
    
    console.log("O Somatório dos Números Negativos é: " + somaneg);
}

negativo();