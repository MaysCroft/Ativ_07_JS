// Atividade 07 Exercício 02 - Função Atividade 02 Exercício 03

const ler = require('readline-sync');

let num, opt;
let calc = 0;

(async () => { const {default: cor} = await import ('chalk');

    function menucalc() {
        num = ler.questionFloat(cor.magentaBright("- Digite um Numero: "));

        console.log(cor.cyanBright("---------- CALCULADORA ----------"));
        console.log(cor.cyanBright("- Selecione: "));
        console.log(cor.cyanBright("- 101. Raiz Quadrada \n- 102. A Metade \n- 103. 10% do Número \n- 104. O Dobro"));
        opt = ler.questionInt(cor.cyanBright("=> "))
        console.log(cor.cyanBright("---------------------------------"));
        
        calculo(opt);
    }

    function calculo() {
        switch (opt) {
            case 101:
                calc = Math.sqrt(num);
                calc = calc.toFixed(2);
                console.log(cor.redBright("O Resultado é: " + calc));
                break;
                
            case 102:
                calc = num / 2;
                calc = calc.toFixed(2);
                console.log(cor.greenBright("O Resultado é: " + calc));
                break;
        
            case 103:
                calc = (num * 10) / 100;
                calc = calc.toFixed(2);
                console.log(cor.yellowBright("O Resultado é: " + calc));
                break;
        
            case 104:
                calc = num * 2;
                calc = calc.toFixed(2);
                console.log(cor.blueBright("O Resultado é: " + calc));
                break;
        
            default:
                console.log(cor.red("Opção Inválida!"));
                break;
        }
    }

    menucalc();
})();