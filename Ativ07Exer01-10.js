// Atividade 07 Exercício 01 - Função Atividade 01 Exercício 10

const ler = require('readline-sync');

let nome, salbruto, prest, valmax;

console.log("-------------------- Prefeitura de Nova Lima --------------------");
console.log("----- Verifique aqui se voce tem direito a linha de Credito! ----");

function verificacao() {
    nome = ler.question("- Digite o Nome do Funcionario: ");
    salbruto = ler.questionFloat("- Digite o Salario Bruto: R$ ");
    prest = ler.questionFloat("- Digite o Valor da Prestacao: R$ ");
    console.log("-----------------------------------------------------------------");
}

function calceResult() {
    valmax = (salbruto * 25) / 100;

    if (prest > valmax) {
        console.log("Infelizmente, o(a) Funcionario(a) " + nome + " não tem direito a Linha de Credito!");
    } else {
        console.log("Funcionario(a) " + nome + " você tem direito a Linha de Credito!");
    }
}

verificacao();
calceResult();