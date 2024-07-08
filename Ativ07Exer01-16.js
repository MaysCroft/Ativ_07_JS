// Atividade 07 Exercício 01 - Função Atividade 01 Exercício 16

const ler = require('readline-sync');

let nome, qtdprod;
var comissao = 5;

(async () => { const {default: cor} = await import ('chalk');

    function relatorio() {
        nome = ler.question(cor.yellow("- Digite o Nome do Funcionario: "));
        qtdprod = ler.questionInt(cor.yellow("- Digite a Quantidade de Produtos Vendidos: "));

        if (qtdprod >= 200 && qtdprod <= 449) {
            comissao = 7.5;
            let final = qtdprod * comissao;
            console.log(cor.green("- Funcionário - " + nome + " - sua Comissão é: R$ " + final));
        } else if (qtdprod >= 450) {
            comissao = 10;
            let final = qtdprod * comissao;
            console.log(cor.cyan("- Funcionário - " + nome + " - sua Comissão é: R$ " + final));
        } else {
            let final = qtdprod * comissao;
            console.log(cor.magenta("- Funcionário - " + nome + " - sua Comissão é: R$ " + final));
        }

    }

    relatorio();
})();