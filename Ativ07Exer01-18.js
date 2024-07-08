// Atividade 07 Exercício 01 - Função Atividade 01 Exercício 18

const ler = require('readline-sync');

let time1, time2, gol1, gol2;

(async () => { const {default: cor} = await import ('chalk');

    function jogo() {
        time1 = ler.question(cor.blue("- Digite Nome do Primeiro Time: "));
        gol1 = ler.questionInt(cor.blue("- Digite Quantidade de Gols do Primeiro Time: "));

        time2 = ler.question(cor.magenta("- Digite Nome do Segundo Time: "));
        gol2 = ler.questionInt(cor.magenta("- Digite Quantidade de Gols do Segundo Time: "));

        resultado(time1, time2, gol1, gol2);
    }

    function resultado() {
        if (gol1 > gol2) {
            console.log(cor.cyanBright("- Time Vencedor: " + time1));
        } else if (gol2 > gol1) {
            console.log(cor.greenBright("- Time Vencedor: " + time2));
        } else {
            console.log(cor.redBright("--- EMPATE!!! ---"));
        }
    }

    jogo();
})();