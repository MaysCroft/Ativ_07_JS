// Atividade 07 Exercício 01 - Função Atividade 01 Exercício 11

const ler = require('readline-sync');

let num;

(async () => { const {default: cor} = await import ('chalk');

    function perg() {
        num = ler.questionInt("- Digite um Numero: ");
        analise(num);
    }
    
    function analise() {
        if (num % 10 == 0) {
            console.log(cor.blueBright("- Esse número é Divisível por 10!"));
        } else if (num % 5 == 0) {
            console.log(cor.magentaBright("- Esse número é Divisível por 5!"));
        } else if (num % 2 == 0) {
            console.log(cor.yellowBright("- Esse número é Divisível por 2!"));
        } else {
            console.log(cor.red("- Esse número não é Divisível por 10, 5 ou 2!"));
        }
    }
    
    perg();
})();