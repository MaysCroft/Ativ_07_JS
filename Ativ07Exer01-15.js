// Atividade 07 Exercício 01 - Função Atividade 01 Exercício 15

const ler = require("readline-sync");

var meta = 1000;
let nome, venda;

(async () => { const {default: cor} = await import ('chalk');

    function funcionario() {
        nome = ler.question(("- Digite o Nome do Funcionario: "));
        venda = ler.questionFloat(("- Digite o Valor de Vendas: R$ "));

        relatorio(venda);
    }

    function relatorio() {
        if (venda >= meta) {
            console.log(cor.yellowBright("- Funcionário(a) " + nome + ", VOCÊ GANHOU O PRÊMIO!!!"));
        } else {
            console.log(cor.redBright("- Funcionário(a) " + nome + ", INFELIZMENTE VOCÊ NÃO GANHOU O PRÊMIO!!!"));
            console.log(cor.redBright("- Meta do Mês: R$ " + meta));
        }
    }

    funcionario();
})();