// Atividade 07 Exercício 03 - Função Atividade 03 Exercício 09

const ler = require('readline-sync');

let num1, num2;
let fatorial = 1;

function fator() {
    num1 = ler.questionFloat("- Digite quantos numeros deseja processar: ");

    for (let i = 0; i < num1; i++) {

        num2 = ler.questionFloat("- Digite um numero para calcular o Fatorial: ");
    
        for (let x = 2; x <= num2; x++) {
            fatorial *= x;
        }
    
        console.log("------------------------------");
        console.log(`- Valor: ${num2} \n- Valor Fatorial: ${fatorial}`);
        console.log("------------------------------");
    }
}

fator();