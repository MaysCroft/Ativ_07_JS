// Atividade 07 Exercício 03 - Função Atividade 03 Exercício 11

const ler = require('readline-sync');

let num, mediapar;
let numero = 0, somapar = 0, contpar = 0;

function media() {
    while (true) {

        num = ler.questionFloat("- Digite um Numero ou 0 Para SAIR: ");
        
        if (num == 0) {
            break;
        }
    
        if (numero % 2 == 0) {
            somapar += num; 
            contpar++; 
        }
    }
    
    if (contpar > 0) {
        mediapar = somapar / contpar;
        console.log("A Média dos Números PARES é: " + mediapar.toFixed(2));
    } else {
        console.log("Nenhum Número PAR foi digitado!");
    }
}

media();