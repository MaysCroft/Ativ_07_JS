// Atividade 07 Exercício 01 - Função Atividade 01 Exercício 17

const ler = require('readline-sync');

let h1, h2, m1, m2;
let soma1, soma2;

function pesquisa() {
    h1 = ler.questionInt("- Digite Idade do Homem 1: ");
    h2 = ler.questionInt("- Digite Idade do Homem 2: ");

    m1 = ler.questionInt("- Digite Idade da Mulher 1: ");
    m2 = ler.questionInt("- Digite Idade da Mulher 2: ");

    calculo(h1, h2, m1, m2);
}

function calculo() {
    if (h1 > h2) {
        if (m1 > m2) {
            soma1 = h1 + m2;
            soma2 = h2 + m1;
            console.log("- A soma da idade do HOMEM MAIS VELHO com a MULHER MAIS NOVA é: " + soma1);
            console.log("- A soma da idade do HOMEM MAIS NOVO com a MULHER MAIS VELHA é: " + soma2);
        } else {
            soma1 = h1 + m1;
            soma2 = h2 + m2;
            console.log("- A soma da idade do HOMEM MAIS VELHO com a MULHER MAIS NOVA é: " + soma1);
            console.log("- A soma da idade do HOMEM MAIS NOVO com a MULHER MAIS VELHA é: " + soma2);
        }
    } else {
        if (m1 > m2) {
            soma1 = h2 + m2;
            soma2 = h1 + m1;
            console.log("- A soma da idade do HOMEM MAIS VELHO com a MULHER MAIS NOVA é: " + soma1);
            console.log("- A soma da idade do HOMEM MAIS NOVO com a MULHER MAIS VELHA é: " + soma2);
        } else {
            soma1 = h2 + m1;
            soma2 = h1 + m2;
            console.log("- A soma da idade do HOMEM MAIS VELHO com a MULHER MAIS NOVA é: " + soma1);
            console.log("- A soma da idade do HOMEM MAIS NOVO com a MULHER MAIS VELHA é: " + soma2);
        }
    }
}

pesquisa();