// Atividade 07 Exercício 01 - Função Atividade 01 Exercício 13

const ler = require('readline-sync');

var alcool = 4.7;
var gasolina = 5.86;
let combust, litro;
let preco = 0;

(async () => { const {default: cor} = await import ('chalk');

    function menuPosto() {
        console.log(cor.cyan("---------- Bem Vindo ao Posto Águia Real ----------"));
        console.log(cor.cyan("------------------ Lista de Preços ----------------"));
        console.log(cor.blue("- ÁLCOOL: R$ 4,70 /LITRO"));
        console.log(cor.green("- GASOLINA: R$ 5,86 /LITRO"));
        console.log(cor.cyan("---------------------------------------------------"));
        combust = ler.question("- Digite o tipo de combustivel: \n- A - Alcool \n- G - Gasolina \n => ").toUpperCase();
        litro = ler.questionFloat("- Digite a Quantidade de Litros: ");

        comb(litro);
    }

    function comb() {
        console.log(cor.cyan("---------------------------------------------------"));

        if (combust == "A" && litro <= 25) {
            preco = (litro * alcool) - ((alcool * 2) / 100);
            preco = preco.toFixed(2);
            console.log("- Total a ser pago: R$ " + preco);
        } else if ((combust == "A" && litro > 25)) {
            preco = (litro * alcool) - ((alcool * 4) / 100);
            preco = preco.toFixed(2);
            console.log("- Total a ser pago: R$ " + preco);
        } else if ((combust == "G" && litro <= 25)) {
            preco = (litro * gasolina) - ((gasolina * 3) / 100);
            preco = preco.toFixed(2);
            console.log("- Total a ser pago: R$ " + preco);
        } else if ((combust == "G" && litro > 25)) {
            preco = (litro * gasolina) - ((gasolina * 5) / 100);
            preco = preco.toFixed(2);
            console.log("- Total a ser pago: R$ " + preco);
        }
        
        console.log(cor.cyan("---------------------------------------------------"));
    }
    
    menuPosto();
})();