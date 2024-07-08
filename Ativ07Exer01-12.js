// Atividade 07 Exercício 01 - Função Atividade 01 Exercício 12

const ler = require('readline-sync');

let num;

(async () => { const {default: cor} = await import ('chalk');

    console.log(cor.blueBright("---------- DESCUBRA O DIA DA SEMANA! ----------"));

    function perg() {
        num = ler.questionInt(cor.cyan("- Digite um numero INTEIRO entre 1 e 7: "));
        analise(num);
    }
    
    function analise() {
        if (num == 1) {
            console.log(cor.blueBright("Esse número corresponde ao Domingo!"));
        } else if (num == 2) {
            console.log(cor.redBright("Esse número corresponde a Segunda-Feira!"));
        } else if (num == 3) {
            console.log(cor.magentaBright("Esse número corresponde a Terça Feira!"));
        } else if (num == 4) {
            console.log(cor.gray("Esse número corresponde a Quarta-Feira!"));
        } else if (num == 5) {
            console.log(cor.blue("Esse número corresponde a Quinta-Feira!"));
        } else if (num == 6) {
            console.log(cor.greenBright("Esse número corresponde a Sexta-Feira!"));
        } else if (num == 7) {
            console.log(cor.cyanBright("Esse número corresponde ao Sábado!"));
        } else {
            console.log(cor.red("Não existe dia da semana com esse número! Tente Novamente!"));
        }

        console.log("-----------------------------------------------");
    }

    perg();
})();